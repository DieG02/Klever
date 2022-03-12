import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import Times from '../../assets/icons/Times.svg';
import { CustomStyles } from '../../utils/stylers';
import { ModalContext } from '../../context/ModalContext';
import { DataContext } from '../../context/DataContext';
import { Data, Schedule } from '../../utils/interfaces';
import styles from './styles';

const Modal = ({ navigation }: any) => {
  const { isVisible, setVisible } = useContext<any>(ModalContext);
  const { data, setData } = useContext<any>(DataContext);
  const [value, setValue] = useState<string>('');

  const handleOnChange = (event: string): void => {
    setValue(event)
  }
  const closeModal = () => {
    setVisible(false)
    setValue('')
  }

  const createBoard = () => {
    const board: Schedule = {
      title: value,
      items: [],
      completed: false,
    };
    setData((previous: Data): Data => {
      return [board, ...previous]
    });
    closeModal();
  }

  
  if(!isVisible) return null;
  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}
      enabled
    >
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.label}>
            Nombre de la lista
          </Text>
          <Pressable
            onPress={closeModal}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Times color='#AAA' width={18} height={18} />
          </Pressable>
        </View>

        <TextInput 
          autoFocus
          autoCapitalize='sentences'
          placeholder='Ingrese el nombre'
          style={styles.input} 
          value={value}
          onChangeText={handleOnChange}
          onSubmitEditing={createBoard}
        />

        <Pressable 
          style={CustomStyles._center}
          onPress={createBoard}
        >
          <Text style={styles.button}>Crear</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Modal;