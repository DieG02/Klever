import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { CheckIcon } from 'react-native-heroicons/micro';
import { toggleItem } from '../services/firestore';
import { Parragraph } from './common';
import { Colors } from '../styles/global';

interface ItemProps {
  id: string;
  label: string;
  check: boolean;
  parentId: string;
}
export default function Item({ item }: { item: ItemProps }) {
  const { label, check } = item;
  const onToggle = () => {
    toggleItem(item.id, !check);
  };

  return (
    <TouchableOpacity style={styles.item} onPress={onToggle}>
      <Parragraph
        numberOfLines={1}
        ellipsizeMode='clip'
        size='lg'
        style={[
          styles.itemLabel, 
          check && { textDecorationLine: 'line-through' },
        ]}>
        {label}
      </Parragraph>
      <View style={check ? styles.itemChecked : styles.itemButton}>
        <CheckIcon color={check ? Colors.White : 'transparent'} width={15}/>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemLabel: {
    paddingVertical: 14,
    flex: 1,
    marginRight: 5,
    // backgroundColor: Colors.Dark
  },
  itemButton: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: Colors.Gray,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemChecked: {
    height: 20,
    width: 20,
    backgroundColor: Colors.Primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});