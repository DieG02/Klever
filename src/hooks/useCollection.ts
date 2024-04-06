import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore'; // Importa Firestore según corresponda
import { ItemModel } from '../types/models';

const useRealtimeItems = (parent_id: string) => {
  const [items, setItems] = useState<ItemModel[]>([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('items')
      .where('parent_id', '==', parent_id)
      .orderBy('created_at', 'desc')
      .onSnapshot(snapshot => {
        const updatedItems: ItemModel[] = [];
        snapshot.forEach(doc => {
          const itemData = doc.data() as ItemModel;
          updatedItems.push(itemData);
        });

        setItems(updatedItems);
      });

    return () => unsubscribe();
  }, [parent_id]);

  return { items };
};

export default useRealtimeItems;
