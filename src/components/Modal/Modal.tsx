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
import styles from './styles';
import useZustand from '../../store/store';


const Modal = ({ navigation }: any) => {
  const { isVisible, setVisible } = useContext<any>(ModalContext);
  const { } = useContext<any>(DataContext);
  const [title, setTitle] = useState<string>('');

  const handleOnChange = (event: string): void => {
    setTitle(event)
  }
  const closeModal = () => {
    setVisible(false)
    setTitle('')
  }

  // const createBoard = () => {
  //   const board: Schedule = {
  //     title,
  //     items: [],
  //     completed: false,
  //   };
    
  //   const value = JSON.stringify(board);
  //   storage.addBoard({ 
  //     key: title, 
  //     value, 
  //     success: () => {
  //       setData((previous: Data): Data => {
  //         return [board, ...previous]
  //       });
  //     } 
  //   });
  //   closeModal();
  // }

  const { addBoard } = useZustand();
  const createBoard = () => {
    addBoard(title);
    closeModal()
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
            <Times color='#AAA' height={14} width={14}/>
          </Pressable>
        </View>

        <TextInput 
          autoFocus
          autoCapitalize='sentences'
          placeholder='Ingrese el nombre'
          style={styles.input} 
          value={title}
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