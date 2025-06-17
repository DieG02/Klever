import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

interface ItemModel {
  id: string;
  checked: boolean;
  parent_id: string;
  label: string;
}

interface BoardStats {
  total: number;
  checked: number;
  unchecked: number;
}

const useBoardStats = (boardId: string) => {
  const [stats, setStats] = useState<BoardStats>({
    total: 0,
    checked: 0,
    unchecked: 0,
  });

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('items')
      .where('parent_id', '==', boardId)
      .onSnapshot(snapshot => {
        let total = 0;
        let checked = 0;
        let unchecked = 0;

        snapshot.forEach(doc => {
          const itemData = doc.data() as ItemModel;
          total++;
          if (itemData.checked) {
            checked++;
          } else {
            unchecked++;
          }
        });

        setStats({
          total,
          checked,
          unchecked,
        });
      });

    return () => unsubscribe();
  }, [boardId]);

  return stats;
};

export default useBoardStats;
