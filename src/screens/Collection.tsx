import { FlatList, SafeAreaView } from 'react-native';
import { Item, TextInputCollection } from '../components';
import { Separator } from '../components/common';
import styles from '../styles/screens/collection';
import { AppNavigationProps, AppRouteProps } from '../types/navigation';
import EmptyCollection from '../components/EmptyCollection';
import useRealtimeItems from '../hooks/useCollection';

interface CollectionProps {
  navigation: AppNavigationProps;
  route: AppRouteProps<'Collection'>;
}
export default function Collection({ route }: CollectionProps) {
  const { id: parent_id } = route.params;
  const { items } = useRealtimeItems(parent_id);

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        style={styles.list}
        data={items}
        renderItem={Item}
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyCollection}
        contentContainerStyle={styles.flatlist}
      />
      <TextInputCollection collectionId={parent_id} />
    </SafeAreaView>
  );
}
