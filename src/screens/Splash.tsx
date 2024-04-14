import { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SplashProps } from '../types/screens';
import styles from '../styles/screens/splash';
import { Colors } from '../styles/global';
import { getDeviceLocale } from '../utils/app';
import { useTranslation } from 'react-i18next';

export default function Splash({ navigation }: SplashProps) {
  const [initializing, setInitializing] = useState(true);
  const { i18n } = useTranslation();
  const [user, setUser] = useState();

  const handleAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  const onRedirect = async () => {
    const locale = await getDeviceLocale();
    i18n.changeLanguage(locale);
    if (!user) {
      navigation.replace('SignIn');
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: 'AppStack' }],
      });
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (!initializing) onRedirect();
  }, [initializing]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.White} barStyle='dark-content' />
      <View style={styles.brand}>
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
