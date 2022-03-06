import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ListContext } from '../../context/ItemContext';

import styles from './styles';

const BoardItem = ({ title, items, completed }: { title: string, items: [], completed: boolean }) => {
  const navigation = useNavigation<any>();
  
  const { setListItems } = useContext<any>(ListContext);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        setListItems(items);
        navigation.navigate('List', { title })
      }}
    >
      <View style={styles.content}>
        <Text style={styles.cardTitle}>
         {title}
        </Text>
        <Text style={styles.description}>
         {items.slice(0, 5).join(', ')}
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