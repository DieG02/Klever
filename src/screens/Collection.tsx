import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Item, TextInputCollection } from '../components';
import { Separator } from '../components/common';
import styles from '../styles/screens/collection';
import { styles as itemStyle } from '../components/Item';
import { getCollectionItems } from '../services/firestore';
import { AppNavigationProps, AppRouteProps } from '../types/navigation';
import EmptyCollection from '../components/EmptyCollection';

interface CollectionProps {
  navigation: AppNavigationProps;
  route: AppRouteProps<'Collection'>;
}
export default function Collection({ route }: CollectionProps) {
  const { id } = route.params;
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = getCollectionItems(id, setItems);
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.flex}
        data={items}
        renderItem={Item}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyCollection}
      />
      <TextInputCollection collectionId={id} />
    </SafeAreaView>
  );
}
