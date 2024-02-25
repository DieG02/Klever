import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../styles/global';

type ItemData = {
  id: string;
  title: string;
};
export default function ListItem ({ item }: { item: ItemData }) {
  return (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.Light,
    height: 80,
    borderRadius: 15,
  },
});