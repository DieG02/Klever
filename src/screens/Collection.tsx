import { FlatList, SafeAreaView, View } from 'react-native';
import { Item, TextInputCollection } from '../components';
import { Separator } from '../components/common';
import styles from '../styles/screens/collection';
import { AppNavigationProps, AppRouteProps } from '../types/navigation';
import EmptyCollection from '../components/EmptyCollection';
import useCollection from '../hooks/useCollection';
import ItemSkeleton from '../components/skeleton/Item';

interface CollectionProps {
  navigation: AppNavigationProps;
  route: AppRouteProps<'Collection'>;
}
export default function Collection({ route }: CollectionProps) {
  const { id: parent_id } = route.params;
  const { items } = useCollection(parent_id);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {items && (
          <FlatList
            data={items}
            renderItem={Item}
            ItemSeparatorComponent={Separator}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={EmptyCollection}
            contentContainerStyle={styles.flatlist}
          />
        )}
        {!items && [0, 1, 2, 3, 4].map(i => <ItemSkeleton key={i} />)}
      </View>
      <TextInputCollection collectionId={parent_id} />
    </SafeAreaView>
  );
}
