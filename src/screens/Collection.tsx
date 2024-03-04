import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { Colors } from '../styles/global';
import { AppNavigationProps, AppRouteProps } from '../types/Navigation';
import { items } from '../utils/mock.data';
import { Item } from '../components';
import TextInputCollection from '../components/TextInputCollection';

interface CollectionProps {
  navigation: AppNavigationProps;
  route: AppRouteProps<'Collection'>
}
export default function Collection({ route }: CollectionProps) {
  const { collectionId } = route.params;
  const Divider = () => (
    <View style={styles.divider}/>
  )

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        style={styles.list}
        data={items[collectionId]}
        renderItem={Item}
        ItemSeparatorComponent={Divider}
        showsVerticalScrollIndicator={false}
      />

      <TextInputCollection
        onPress={(value: string) => console.log(value)}
        placeholder='Add new item...'
        allowSpeaker
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  list: {
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.Gray,
  },
});