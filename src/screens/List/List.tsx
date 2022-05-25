import React, { useContext } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import FloatButton from '../../components/FloatButton/FloatButton';
import { DataContext } from '../../context/DataContext';
import { useNavigation } from '@react-navigation/native';
import useZustand from '../../store/store';
import EmptyMessage from '../../components/EmptyMessage/EmptyMessage';
import styles from './styles';

const List = () => {
  const { name } = useContext<any>(DataContext);
  const navigation = useNavigation<any>();
  const { boards } = useZustand();
  
  const { items } = boards.filter((list: any) => list.title === name.current)[0];
  
  if(!items.length) {
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
        {items.map((label: string, index: number) => (
          <ListItem 
            key={index}
            label={label}
            checked={false}
          />
        ))}
      </ScrollView>
      <FloatButton onPress={() => navigation.navigate('add-items')} />
    </View>
  )
}

export default List;