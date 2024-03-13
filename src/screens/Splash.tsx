import { SplashProps } from '../types/screens';
import { WEB_CLIENT_ID } from '@env';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { Colors, Poppins } from '../styles/global';

export default function Splash({ navigation }: SplashProps) {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: [
        // 'https://www.googleapis.com/auth/user.birthday.read',
        // 'https://www.googleapis.com/auth/user.gender.read',
        // 'https://www.googleapis.com/auth/user.addresses.read',
      ],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
    });
    const isSignedIn = async () => {
      const session = await GoogleSignin.isSignedIn();
      if (session) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'AppStack' }],
        });
      } else {
        navigation.replace('SignIn');
      }
    };
    isSignedIn();
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