import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Navigation from '../../navigation';


const App = () => {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar barStyle={'light-content'} />
      <Navigation/>
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
