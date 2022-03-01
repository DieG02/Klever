import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import MenuIcon from '../../assets/icons/Menu';
import styles from './styles';

const StackHeader = ({ options, params, route }: any) => {
  
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => console.log('Dont touch me')}
      >
        <MenuIcon />
      </TouchableOpacity>
      <Text style={styles.title}>{options.title || 'Mis listas'}</Text>
    </View>
  )
}

export default StackHeader;