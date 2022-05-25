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

const BoardItem = ({ title, completed = 9 }: any) => {
  const navigation = useNavigation<any>();
  const { name } = useContext<any>(DataContext);
  const { boards } = useZustand();
  const { items } = boards.filter((list: any) => list.title === title)[0];

  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    console.log(items);
  }, [])

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        name.current = title;
        navigation.navigate('list-detail', { title })
      }}
    >
      <View style={styles.content}>
        <Text style={styles.cardTitle}>
         {title}
        </Text>
        <Text style={styles.description}>
         {/* {data[index].items.slice(0, 5).join(', ')} */}
         Description
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