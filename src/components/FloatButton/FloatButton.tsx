import React from 'react';
import {
  View,
  Pressable,
  GestureResponderEvent
} from 'react-native';
import Plus from '../../assets/icons/Plus';
import styles from './styles';

type FloatButtonType = {
  onPress: (event: GestureResponderEvent) => void
}

const FloatButton = ({ onPress }: FloatButtonType) => {

  return (
    <Pressable 
      onPress={onPress}
      style={({ pressed }) => [
        styles.size,
        { opacity: pressed ? 0.5 : 1.0 },
      ]}
    >
      <View>
        <Plus color='#FFF'/>
      </View>
    </Pressable>
  )
}

export default FloatButton;