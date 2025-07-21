import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { BoardModel } from '../../types/models';
import { t } from 'i18next';
import Toast from 'react-native-toast-message';

export const getBoards = async () => {
  const user_id = auth().currentUser!.uid;
  const querySnapshot = await firestore()
    .collection('boards')
    .where('user_id', '==', user_id)
    .orderBy('created_at', 'desc') // Ordenar por fecha de creación descendente
    .get();

  const boards: BoardModel[] = [];

  querySnapshot.forEach(doc => {
    const boardData = doc.data() as BoardModel;
    boards.push(boardData);
  });

  return boards;
};

export const addBoard = (board: Partial<BoardModel>) => {
  const user_id = auth().currentUser!.uid;
  const boardRef = firestore().collection('boards').doc();
  const board_id = boardRef.id;
  const boardData: BoardModel = {
    user_id: user_id,
    id: board_id,
    title: board.title!,
    description: board.description || '',
    category: board.category || '',
    total: 0,
    current: 0,
    created_at: firestore.FieldValue.serverTimestamp(),
    updated_at: firestore.FieldValue.serverTimestamp(),
  };
  boardRef.set(boardData);
  return board_id;
};

export const removeBoard = async (ids: string | string[]) => {
  const idsArray = typeof ids === 'string' ? [ids] : ids;
  const itemsRef = firestore().collection('items');
  const boardsRef = firestore().collection('boards');

  for (const id of idsArray) {
    try {
      const itemsSnapshot = await itemsRef.where('parent_id', '==', id).get();

      const batch = firestore().batch();
      itemsSnapshot.forEach(itemDoc => {
        const itemRef = itemsRef.doc(itemDoc.id);
        batch.delete(itemRef);
      });

      const boardRef = boardsRef.doc(id);
      batch.delete(boardRef);

      await batch.commit();
    } catch (error) {
      console.error(`Error removing board ${id}:`, error);
    }
  }

  Toast.show({
    text1: t('toast.user.board.delete.title'),
    text2: t('toast.user.board.delete.message'),
    type: 'success',
  });
};
