import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';
import { Colors } from '../../utils/stylers';
import styles from './styles';

const EmptyMessage = ({ message, children }: { message: string, children: any }) => {
 
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {message}
      </Text>
      {children}
      <StatusBar barStyle='light-content' backgroundColor={Colors.Main} />
    </View>
  )
}

export default EmptyMessage;