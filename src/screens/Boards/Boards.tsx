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
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';


const Boards = ({ navigation }: any) => {
  
  const { setVisible } = useContext<any>(ModalContext);
  const { data, setData, storage } = useContext<any>(DataContext);

  /**
   * Effect for render the first board after create a new one
   * It use the first element in 'data', may it's not the best solution
   */
  // useEffect(() => {
  //   navigation.navigate('List', { title: data[0].title, index: 0})
  // }, [data.length])z


  useEffect(() => {
    (async () => {
      const boards: any[] = await storage.getBoards();
      setData(boards);
    })();
  }, []);

  if (!data.length) {
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
        {data.map(({ title, completed }: Schedule, index: number) => (
          <BoardItem
            key={index}
            title={title}
            index={index}
            completed={completed}
          />
        ))}
      </ScrollView>
      <FloatButton onPress={() => setVisible(true)} />

      <StatusBar barStyle='light-content' backgroundColor={Colors.Main} />
    </View>
  )
}

export default Boards;