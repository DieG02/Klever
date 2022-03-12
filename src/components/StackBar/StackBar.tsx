import React from 'react';
import {
  View,
  Text,
  Pressable
} from 'react-native';
import MenuIcon from '../../assets/icons/Menu.svg';
import ArrowIcon from '../../assets/icons/Arrow.svg';
import styles from './styles';

const StackHeader = ({ options, route }: any) => {
  
  return (
    <View style={styles.header}>
      <Pressable
        style={styles.menuIcon}
        hitSlop={{ top: 50, right: 50, bottom: 50, left: 50 }}
        onPress={() => console.log('Dont touch me')}
      >
        {route.name === 'List'
          ? <ArrowIcon width={20} color='white'/> 
          : <MenuIcon width={20} color='white'/>
        }
      </Pressable>
      <Text style={styles.title}>{options.title || 'Mis listas'}</Text>
    </View>
  )
}

export default StackHeader;