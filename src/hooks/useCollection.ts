import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { ItemModel } from '../types/models';

const useCollection = (parent_id: string) => {
  const [items, setItems] = useState<ItemModel[] | null>(null);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('items')
      .where('parent_id', '==', parent_id)
      .orderBy('created_at', 'desc')
      .onSnapshot(
        snapshot => {
          const updatedItems: ItemModel[] = snapshot.docs.map(doc => {
            return doc.data() as ItemModel;
          });
          setItems(updatedItems);
        },
        e => console.error(e),
      );

    return () => unsubscribe();
  }, [parent_id]);

  return { items };
};

export default useCollection;

/*
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { decryptData } from '../config/CryptoServices';
import { ItemModel } from '../types/models';

const useCollection = (parent_id: string) => {
  const [items, setItems] = useState<ItemModel[] | null>(null);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('items')
      .where('parent_id', '==', parent_id)
      .orderBy('created_at', 'desc')
      .onSnapshot(
        async snapshot => {
          const updatedItems: ItemModel[] = await Promise.all(
            snapshot.docs.map(async doc => {
              const itemData = doc.data() as ItemModel;
              const decryptedLabel = await decryptData(itemData.label);
              return { ...itemData, label: decryptedLabel };
            }),
          );

          setItems(updatedItems);
        },
        e => console.error(e),
      );

    return () => unsubscribe();
  }, [parent_id]);

  return { items };
};

export default useCollection;

*/
