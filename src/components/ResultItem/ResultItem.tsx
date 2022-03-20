import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
} from 'react-native';
import Plus from '../../assets/icons/Plus.svg';
import Times from '../../assets/icons/Times.svg';
import { Colors } from '../../utils/stylers';
import useZustand from '../../store/store';
import { DataContext } from '../../context/DataContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const ResultItem = ({ name, selected }: { name: string, selected: boolean }) => {
  const [value, setValue] = useState<boolean>();
  const { name: listName } = useContext<any>(DataContext);
  const { addItems, removeItems } = useZustand();
  const onPress = () => {
    if(value) {
      removeItems(listName.current, name);
    } else {
      addItems(listName.current, name);
    }
    setValue(!value);
  }

  const isSelected = value ? styles.selected : styles.none;

  useEffect(() => {
    setValue(selected)
  }, [])
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={[styles.text, isSelected]}>
        {name}
      </Text>
      <Pressable style={styles.icon}>
        {value
          ? <Times color={Colors.Red} width={14}/>
          : <Plus color={Colors.Blue} width={18}/>
        }
      </Pressable>
    </TouchableOpacity>
  )
}

export default ResultItem;