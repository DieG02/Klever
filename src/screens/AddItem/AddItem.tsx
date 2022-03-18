import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './styles';

const AddItems = () => {
  return(
    <View style={styles.view}>
      <SearchBar />
      <View style={styles.content}>
        <Text>Nueva Screen Default</Text>
      </View>
    </View>
  )
}

export default AddItems;