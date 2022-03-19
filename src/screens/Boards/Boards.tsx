import React, { useContext, useRef, useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import BoardItem from '../../components/BoardItem/BoardItem';
import FloatButton from '../../components/FloatButton/FloatButton';
import EmptyMessage from '../../components/EmptyMessage/EmptyMessage';
import { ModalContext } from '../../context/ModalContext';
import { DataContext } from '../../context/DataContext';
import { Schedule } from '../../utils/interfaces';
import { Colors } from '../../utils/stylers';
import styles from './styles';


const Boards = () => {
  
  const { setVisible } = useContext<any>(ModalContext);
  const { store } = useContext<any>(DataContext);
  const { boards } = store;
  
  if (!boards.length) {
    return (
      <EmptyMessage message='No hay listas agregadas'>
        <FloatButton onPress={() => setVisible(true)} />
      </EmptyMessage>
    )
  }

  return(
    <View style={styles.view}>
      <ScrollView
        style={styles.cardContainer}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {boards.map(({ title }: Schedule, index: number) => (
          <BoardItem
            key={index}
            title={title}
          />
        ))}
      </ScrollView>
      <FloatButton onPress={() => setVisible(true)} />

      <StatusBar barStyle='light-content' backgroundColor={Colors.Main} />
    </View>
  )
}

export default Boards;