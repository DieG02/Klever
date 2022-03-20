import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Microphone from '../../assets/icons/Microphone.svg';
import LeftArrow from '../../assets/icons/Arrow.svg';
import Times from '../../assets/icons/Times.svg';
import styles from './styles';
import { Colors } from '../../utils/stylers';

const SearchBar = () => {
  const [value, setValue] = useState<string>('')

  return (
    <View style={styles.view}>
      <Pressable 
        hitSlop={{ top: 20, right: 15, bottom: 20, left: 5 }}
        onPress={() => console.log('Back')}
        style={styles.left}
      >
        <LeftArrow width={18} color={Colors.Grey}/>
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
        hitSlop={{ top: 20, right: 5, bottom: 20, left: 15 }}
        onPress={() => console.log('Microphone')}
        style={styles.right}
      >
        {value 
          ? <Times width={14} color={Colors.Grey} />
          : <Microphone width={14} color={Colors.Main} />
        }
      </Pressable>
    </View>
  )
}

export default SearchBar;