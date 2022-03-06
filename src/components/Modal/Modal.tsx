import React, { useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Times from '../../assets/icons/Times.svg';
import { CustomStyles } from '../../utils/stylers';
import { ModalContext } from '../../context/ModalContext';
import styles from './styles';

const Modal = () => {
  const { isVisible, setVisible } = useContext<any>(ModalContext);
  
  if(!isVisible) return null;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      enabled
    >
    {/* <View style={styles.container}> */}
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.label}>
            Nombre de la lista
          </Text>
          <Pressable
            style={CustomStyles._center}
            onPress={() => setVisible(false)}
          >
            <Times color='#AAA' />
          </Pressable>
        </View>

        <TextInput 
          style={styles.input} 
          placeholder='Ingrese el nombre'
          autoFocus
        />

        <Pressable 
          style={CustomStyles._center}
          onPress={() => console.log('Crear lista')}
        >
          <Text style={styles.button}>Crear</Text>
        </Pressable>
      </View>
    {/* </View> */}
    </KeyboardAvoidingView>
  )
}

export default Modal;