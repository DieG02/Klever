import React, { useState, useContext } from 'react';
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

const ResultItem = ({ name, selected, value, setValue, setData }: { name: string, selected: boolean, value: string, setValue: any, setData: any }) => {
  const [isSelected, setIsSelected] = useState<boolean>(selected);
  const { name: listName } = useContext<any>(DataContext);
  const { addItems, removeItems } = useZustand();

  const onPress = () => {
    if (isSelected) {
      removeItems(listName.current, name);
    } else {
      if(value === name) {
        setValue('')
        setData((previous: any[]) => [{ name, selected: true, id: new Date() }, ...previous.slice(1)])
      }
      addItems(listName.current, name);
    }
    setIsSelected(!isSelected);
  }
  const toogleStyle = isSelected ? styles.selected : styles.none;

  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={[styles.text, toogleStyle]}>
        {name}
      </Text>
      <Pressable style={styles.icon}>
        {isSelected
          ? <Times color={Colors.Red} width={14}/>
          : <Plus color={Colors.Blue} width={18}/>
        }
      </Pressable>
    </TouchableOpacity>
  )
}

export default ResultItem;