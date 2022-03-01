import React from 'react';
import {
  View,
  ScrollView,
  StatusBar
} from 'react-native';
import BoardItem from '../../components/BoardItem/BoardItem';
import FloatButton from '../../components/FloatButton/FloatButton';
import { Colors } from '../../utils/stylers';
import styles from './styles';

const Boards = () => {
  const boardItems = [
    {
      title: 'Supermercado',
      items: [
        'Tomate',
        'lechuga',
        'leche',
        'naranja',
        'sandia',
        'albaca',
        'rúcula',
        'piña'
      ],
      completed: false,
    },
    {
      title: 'Trabajo',
      items: [
        'Medialuna',
        'café',
        'jugo de naranja',
        'pan',
        'alfajores',
        'chocolate'
      ],
      completed: true,
    },
    {
      title: 'Escuela',
      items: [
        'Regla',
        'cartulina',
        'escuadra',
        'compás',
        'cartuchera',
        'hojas',
        'lapices',
        'estilografos'
      ],
      completed: false,
    },
  ]

  return(
    <View style={styles.view}>
      <ScrollView
        style={styles.cardContainer}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {boardItems.map(({ title, items, completed }: any, index) => (
          <BoardItem
            key={index}
            title={title}
            items={items}
            completed={completed}
          />
        ))}
      </ScrollView>
      <FloatButton onPress={() => console.log('Add Board')} />

      <StatusBar barStyle='light-content' backgroundColor={Colors.Main} />
    </View>
  )
}

export default Boards;