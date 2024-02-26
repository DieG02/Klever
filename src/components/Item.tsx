import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { CheckIcon } from 'react-native-heroicons/micro';
import { Colors } from '../styles/global';
import { Parragraph } from './common';

interface ItemProps {
  children: React.ReactNode;
}
export default function Item({ item }: any) {
  return (
    <TouchableOpacity style={styles.item}>
      <Parragraph
        numberOfLines={1}
        ellipsizeMode='clip'
        size='lg'
        style={[
          styles.itemLabel, 
          item.isChecked && { textDecorationLine: 'line-through' },
        ]}>
        {item.label}
      </Parragraph>
      <View style={item.isChecked ? styles.itemChecked : styles.itemButton}>
        <CheckIcon color={item.isChecked ? Colors.White : 'transparent'} width={15}/>
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