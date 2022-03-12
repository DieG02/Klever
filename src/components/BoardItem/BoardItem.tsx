import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataContext } from '../../context/DataContext';

import styles from './styles';

const BoardItem = ({ title, completed, index }: any) => {
  const navigation = useNavigation<any>();
  const { data } = useContext<any>(DataContext);
  
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        navigation.navigate('List', { title, index })
      }}
    >
      <View style={styles.content}>
        <Text style={styles.cardTitle}>
         {title}
        </Text>
        <Text style={styles.description}>
         {data[index].items.slice(0, 5).join(', ')}
        </Text>
      </View>

      <View style={styles.count}>
        {completed ? (
          <View style={styles.listItemsCompleted}>
            <Text style={styles.itemCountCompleted}>
              12/12
            </Text>
          </View>
        ) : (
          <View style={styles.listItems}>
            <Text style={styles.itemCount}>
              12/12
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default BoardItem;