import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataContext } from '../../context/DataContext';
import useZustand from '../../store/store';

import styles from './styles';

const BoardItem = ({ title, description, id, completed = 0 }: any) => {
  const navigation = useNavigation<any>();
  const { name } = useContext<any>(DataContext);
  const store = useZustand();
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    setItems(store.items[id])
  }, [])

  if(!items) return null;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        name.current = title;
        navigation.navigate('list-detail', { title })
        store.updateIdList(id)
      }}
    >
      <View style={styles.content}>
        <Text style={styles.cardTitle}>
          {title}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>

      <View style={styles.count}>
        {completed ? (
          <View style={styles.listItemsCompleted}>
            <Text style={styles.itemCountCompleted}>
              {`${items.length}/${items.length}`}
            </Text>
          </View>
        ) : (
          <View style={styles.listItems}>
            <Text style={styles.itemCount}>
              {`${completed}/${items.length}`}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default BoardItem;