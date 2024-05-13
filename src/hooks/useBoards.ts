import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { BoardModel } from '../types/models';

const useBoards = () => {
  const [boards, setBoards] = useState<BoardModel[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    try {
      const user_id = auth().currentUser?.uid;
      if (!user_id) return;
      setIsLoading(true);

      const unsubscribe = firestore()
        .collection('boards')
        .where('user_id', '==', user_id)
        .orderBy('created_at', 'desc')
        .onSnapshot(
          snapshot => {
            const updatedBoards: BoardModel[] = [];
            snapshot.forEach(doc => {
              const boardData = doc.data() as BoardModel;
              updatedBoards.push(boardData);
            });
            setBoards(updatedBoards);
          },
          e => console.error(e),
        );

      return () => unsubscribe();
    } catch (error) {
      setError(error);
      console.error('Error fetching user boards:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { boards, isLoading, error };
};

export default useBoards;
