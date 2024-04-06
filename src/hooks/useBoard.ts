import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { BoardModel } from '../types/models';

const useBoards = () => {
  const [boards, setBoards] = useState<BoardModel[]>([]);

  useEffect(() => {
    try {
      const user_id = auth().currentUser?.uid;
      if (!user_id) return;

      const unsubscribe = firestore()
        .collection('boards')
        .where('user_id', '==', user_id)
        .orderBy('created_at', 'desc')
        .onSnapshot(snapshot => {
          const updatedBoards: BoardModel[] = [];
          snapshot.forEach(doc => {
            const boardData = doc.data() as BoardModel;
            updatedBoards.push(boardData);
          });
          setBoards(updatedBoards);
        });

      return () => unsubscribe();
    } catch (error) {
      console.error('Error fetching user boards:', error);
    }
  }, []);

  return { boards };
};

export default useBoards;
