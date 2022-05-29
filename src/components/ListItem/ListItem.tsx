import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import CheckSvg from '../../assets/icons/Check.svg';
import { Colors } from '../../utils/stylers';
import useZustand from '../../store/store';
import styles from './styles';

const ListItem = ({ item }: any) => {
  const [isChecked, setCheck] = useState<boolean>(item.isChecked);
  const { idList, updateItems } = useZustand();

  const handleOnPress = () => {
    setCheck(!isChecked);
    updateItems(idList, {
      ...item,
      isChecked: !isChecked,
    })
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handleOnPress}
    >
      <View style={styles.count}>
        {isChecked ? (
          <View style={styles.iconChecked}>
            <CheckSvg color={Colors.White} width={13}/>
          </View>
        ) : (
          <View style={styles.icon}>
            <CheckSvg color='#CCC' width={13} />
          </View>
        )}
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.label, isChecked && styles.labelChecked]}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ListItem;