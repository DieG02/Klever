import { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { Colors, Poppins } from '../styles/global';
import { SplashProps } from '../types/Screens';

export default function Splash({ navigation }: SplashProps) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.Primary} barStyle='light-content'/>
      <View style={styles.brand}>
        <View style={styles.logo}/>
        <Text style={styles.klever}>
          Klever
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>
          Powered by <Text style={styles.company}>Akira</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: Colors.Placeholder,
    marginBottom: 25,
  },
  klever: {
    fontFamily: Poppins.Semibold,
    fontSize: 24,
    color: Colors.White,
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
  },
  text: {
    fontSize: 12,
    color: Colors.White,
  },
  company: {
    fontFamily: Poppins.Semibold,
    textTransform: 'uppercase',
  },
});