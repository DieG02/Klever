import { useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SplashProps } from '../types/screens';
import styles from '../styles/screens/splash';
import { Colors } from '../styles/global';

export default function Splash({ navigation }: SplashProps) {
  useEffect(() => {
    const user = auth().currentUser;
    if (!user) navigation.replace('SignIn');
    else
      navigation.reset({
        index: 0,
        routes: [{ name: 'AppStack' }],
      });
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.Primary} barStyle='light-content' />
      <View style={styles.brand}>
        <View style={styles.logo} />
        <Text style={styles.klever}>Klever</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>
          Powered by <Text style={styles.company}>Akira</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
