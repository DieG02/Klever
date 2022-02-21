import React from 'react';
import {
  View,
  Text,
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
    <Pressable onPress={onPress} style={styles.size}>
      <View>
        <Plus/>
      </View>
    </Pressable>
  )
}

export default FloatButton;