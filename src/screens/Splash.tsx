import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SplashProps } from '../types/screens';
import styles from '../styles/screens/splash';
import { getDeviceLocale } from '../utils/app';
import { useTranslation } from 'react-i18next';
import { Heading, Layout } from '../components/common';

export default function Splash({ navigation }: SplashProps) {
  const [initializing, setInitializing] = useState(true);
  const { i18n } = useTranslation();
  const [user, setUser] = useState();

  const handleAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  const onRedirect = () => {
    const locale = getDeviceLocale();
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
    <Layout backgroundColor='White' barStyle='dark-content'>
      <View style={styles.wrapper}>
        <View style={styles.brand}>
          <Heading color='Primary' size={32} type='Semibold'>
            Klever
          </Heading>
        </View>
        <View style={styles.footer}>
          <Heading color='Primary' size={12}>
            Powered by <Text style={styles.company}>Akira</Text>
          </Heading>
        </View>
      </View>
    </Layout>
  );
}
