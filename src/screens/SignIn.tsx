import { useEffect, useState } from 'react';
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import SignInBanner from '../assets/app/SignInBanner';
import { Heading, MainButton, InputField, Spacing } from '../components/common';
import { AuthNavigationProps } from '../types/navigation';
import auth from '@react-native-firebase/auth';
import styles from '../styles/screens/signin';
import { Colors } from '../styles/global';
import { GoogleAuthButton } from '../components';

interface SignInProps {
  navigation: AuthNavigationProps;
}
export default function SignIn({ navigation }: SignInProps) {
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const keyboardDidShow = () => {
    setKeyboardShown(true);
  };
  const keyboardDidHide = () => {
    setKeyboardShown(false);
  };

  const handleRedirect = () => {
    navigation.replace('SignUp');
  };

  const handleChange = (text: string, field: 'email' | 'password') => {
    setCredentials({
      ...credentials,
      [field]: text,
    });
  };

  const handleSignIn = () => {
    console.log(credentials);
    auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(data => {
        console.log({ data, user: data.user });
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        // if (error.code === 'auth/invalid-credential') { }
        console.error({ message: error.message, code: error.code });
      });
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.White} barStyle='dark-content' />
      {!keyboardShown && (
        <View style={styles.banner}>
          <SignInBanner height={200} />
        </View>
      )}

      <Heading type='Semibold' style={styles.header}>
        <Text>Sign in to</Text>
        <Text>{` `}</Text>
        <Text style={styles.hightlight}>Klever</Text>
      </Heading>

      <InputField
        label='Email'
        placeholder={`Enter your email`}
        onChangeText={value => handleChange(value, 'email')}
      />
      <InputField
        label='Password'
        placeholder={`Enter your password`}
        onChangeText={value => handleChange(value, 'password')}
        secureTextEntry
        marginb={10}
      />

      {/* <Pressable onPress={onRedirect}> // TODO: Handle forgotten password
        <Heading type='Medium' color='Label' style={styles.password}>
          Forgot password?
        </Heading>
      </Pressable> */}

      <Spacing size={20} />

      <MainButton onPress={handleSignIn}>Sign in</MainButton>
      <Spacing size={20} />
      <GoogleAuthButton />

      <Pressable onPress={handleRedirect} style={styles.footer}>
        <Heading type='Medium' color='Label' style={styles.link}>
          <Text>Don't have an account?</Text>
          <Text>{` `}</Text>
          <Text style={styles.hightlight}>Sign up</Text>
        </Heading>
      </Pressable>
    </SafeAreaView>
  );
}
