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
      console.log('Show Drawer')
    }
  }

  return (
    <View style={styles.header}>
      <Pressable
        style={styles.menuIcon}
        hitSlop={{ top: 50, right: 50, bottom: 50, left: 50 }}
        onPress={onPress}
      >
        {route.name === 'list-detail'
          ? <ArrowIcon width={18} color='white'/> 
          : <MenuIcon width={18} color='white'/>
        }
      </Pressable>
      <Text style={styles.title}>{options.title}</Text>
    </View>
  )
}

export default StackHeader;