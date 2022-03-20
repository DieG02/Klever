import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Microphone from '../../assets/icons/Microphone.svg';
import LeftArrow from '../../assets/icons/Arrow.svg';
import styles from './styles';
import { Colors } from '../../utils/stylers';

const SearchBar = () => {
  const [value, setValue] = useState<string>('')

  return (
    <View style={styles.view}>
      <Pressable 
        hitSlop={{ top: 20, right: 0, bottom: 20, left: 15 }}
        style={styles.left}
        onPress={() => console.log('Back')}
      >
        <LeftArrow width={20} color={Colors.Grey}/>
      </Pressable>
      <TextInput 
        style={styles.input}
        value={value}
        // autoFocus
        placeholder='Añadir artículo'
        onChangeText={(text: string) => {
          setValue(text)
        }}
      />
      <Pressable
        hitSlop={{ top: 20, right: 0, bottom: 20, left: 15 }}
        style={styles.right}
      >
        <Microphone height={20}/>
      </Pressable>
    </View>
  )
}

export default SearchBar;