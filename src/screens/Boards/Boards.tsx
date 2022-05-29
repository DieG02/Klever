import React, { useContext, useEffect } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import BoardItem from '../../components/BoardItem/BoardItem';
import FloatButton from '../../components/FloatButton/FloatButton';
import EmptyMessage from '../../components/EmptyMessage/EmptyMessage';
import { ModalContext } from '../../context/ModalContext';
import { DataContext } from '../../context/DataContext';
import useZustand from '../../store/store';
import { Schedule } from '../../utils/interfaces';
import CallProcedure from '../../utils/seed.json';
import { Colors } from '../../utils/stylers';
import styles from './styles';


const Boards = () => {
  
  const { setVisible } = useContext<any>(ModalContext);
  const { name } = useContext<any>(DataContext);
  const store = useZustand();
  

  useFocusEffect(() => {
    name.current = 'Mis Listas';
  })

  useEffect(() => {
    //llamada a la API con el userId
    store.startLoading();
    setTimeout(() => {
      const response = CallProcedure;
      store.setInitialData(response);
      store.stopLoading();
    }, 1000)
  }, [])

  if(store.isLoading) {
    return (
      <View style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ActivityIndicator size='large' color='#4E42EB' />
      </View>
    )
  }

  if (!store.boards.length && !store.isLoading) {
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
        {store.boards.map(({ title, description, id }: any, index: number) => (
          <BoardItem
            key={index}
            title={title}
            description={description}
            id={id}
          />
        ))}
      </ScrollView>
      <FloatButton onPress={() => setVisible(true)} />

      <StatusBar barStyle='light-content' backgroundColor={Colors.Main} />
    </View>
  )
}

export default Boards;