import React from 'react';
import {
  View,
  Text,
  Pressable
} from 'react-native';
import MenuIcon from '../../assets/icons/Menu.svg';
import ArrowIcon from '../../assets/icons/Arrow.svg';
import styles from './styles';

const StackHeader = ({ route, options, navigation }: any) => {
  const onPress = () => {
    if (route.name === 'list-detail') {
      navigation.goBack();
    } else {
      console.log('Drawer slide')
    }
  }

  return (
    <View style={styles.header}>

      {route.name === 'list-detail' &&
        <Pressable
          style={styles.menuIcon}
          hitSlop={{ top: 50, right: 50, bottom: 50, left: 50 }}
          onPress={onPress}
        >
          <ArrowIcon width={18} color='white'/> 
        </Pressable>
      }
      <Text style={styles.title}>{options.title || route.name}</Text>
    </View>
  )
}

export default StackHeader;