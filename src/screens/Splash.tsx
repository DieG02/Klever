import { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SplashProps } from '../types/screens';
import styles from '../styles/screens/splash';
import { Colors } from '../styles/global';

export default function Splash({ navigation }: SplashProps) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  const onRedirect = () => {
    if (!user) navigation.replace('SignIn');
    else
      navigation.reset({
        index: 0,
        routes: [{ name: 'AppStack' }],
      });
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (!initializing) onRedirect();
  }, [initializing]);

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
