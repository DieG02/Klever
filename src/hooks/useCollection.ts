import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { CollectionProps } from '../types/hooks';

const defaultProps = {
  total: null,
  current: null,
};
const useCollection = (id: string) => {
  const [collection, setCollection] = useState<CollectionProps>(defaultProps);

  useEffect(() => {
    try {
      const unsubscribeItems = firestore()
        .collection('items')
        .where('parentId', '==', id)
        .onSnapshot((snapshot) => {
          const totalItems = snapshot.size;
          const checkedItems = snapshot.docs.filter((doc) => doc.data().check).length;
          setCollection({
            total: totalItems,
            current: checkedItems,
          });
        });

      return () => unsubscribeItems();
    } catch (error) {
      console.error('Error fetching items data:', error);
    }
  }, []);

  return collection;
};

export default useCollection;