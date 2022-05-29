import React, { useContext } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import FloatButton from '../../components/FloatButton/FloatButton';
import { useNavigation } from '@react-navigation/native';
import useZustand from '../../store/store';
import EmptyMessage from '../../components/EmptyMessage/EmptyMessage';
import styles from './styles';

const List = () => {
  const navigation = useNavigation<any>();
  const store = useZustand();
  const items = store.items[store.idList];

  if(!items || !items.length) {
    return (
      <EmptyMessage message='No hay items en la lista'>
        <FloatButton onPress={() => navigation.navigate('add-items')} />
      </EmptyMessage>
    )
  }

  return (
    <View style={styles.view}>
      <ScrollView
        style={styles.cardContainer}
        contentContainerStyle={{ paddingBottom: 15 }}
        showsVerticalScrollIndicator={false}
      >
        {items.map((value: any, index: number) => (
          <ListItem 
            key={index}
            item={value}
          />
        ))}
      </ScrollView>
      <FloatButton onPress={() => navigation.navigate('search')} />
    </View>
  )
}

export default List;