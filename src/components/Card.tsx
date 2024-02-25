import { Pressable, StyleSheet, Text } from 'react-native';

import { Colors } from '../styles/global';

type ItemData = {
  id: string;
  title: string;
};
export default function Card ({ item, onRedirect }: { item: ItemData, onRedirect: () => void }) {
  return (
    <Pressable style={styles.item} onPress={onRedirect}>
      <Text>{item.title}</Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.Light,
    height: 80,
    borderRadius: 15,
  },
});