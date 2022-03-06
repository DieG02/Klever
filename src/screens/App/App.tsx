import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Navigation from '../../navigation';
import ListProvider from '../../context/ItemContext';
import ModalProvider from '../../context/ModalContext';
import Modal from '../../components/Modal/Modal';

const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ModalProvider>
        <ListProvider>
          <Navigation/>
        </ListProvider>

        <Modal />
      </ModalProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    margin: 0,
  }
});

export default App;
