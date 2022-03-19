import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
} from 'react-native';
import Plus from '../../assets/icons/Plus.svg';
import Times from '../../assets/icons/Times.svg';
import { Colors } from '../../utils/stylers';
import useZustand from '../../store/store';
import styles from './styles';

const ResultItem = ({ name, selected }: { name: string, selected: boolean }) => {
  const [value, setValue] = useState<boolean>(selected);
  const { addItems } = useZustand();
  const onPress = () => {
    addItems('Escuela', name);
    setValue(!value);
  }

  const isSelected = value ? styles.selected : styles.none;

  return (
    <View style={styles.item} >
      <Text style={[styles.text, isSelected]}>
        {name}
      </Text>
      <Pressable 
        onPress={onPress}
        style={styles.icon} 
        hitSlop={{ top: 10, right: 15, bottom: 10, left: 15 }}
      >
        {value
          ? <Times color={Colors.Red} width={14}/>
          : <Plus color={Colors.Blue} width={18}/>
        }
      </Pressable>
    </View>
  )
}

export default ResultItem;