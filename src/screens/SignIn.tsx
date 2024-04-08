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
import {
  Heading,
  MainButton,
  InputField,
  Spacing,
  PasswordField,
} from '../components/common';
import { AuthNavigationProps } from '../types/navigation';
import styles from '../styles/screens/signin';
import { Colors } from '../styles/global';
import { GoogleAuthButton } from '../components';
import { AuthWithCredentials } from '../utils/auth';
import { CommonActions } from '@react-navigation/native';
import LanguageModal from '../components/modal/Language';
import { LanguageIcon } from 'react-native-heroicons/mini';

interface CredentialsProps {
  email: string;
  password: string;
}

interface SignInProps {
  navigation: AuthNavigationProps;
}
export default function SignIn({ navigation }: SignInProps) {
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [modal, setModal] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<CredentialsProps>({
    email: '',
    password: '',
  });

  const handleRedirect = () => {
    navigation.replace('SignUp');
  };

  const handleChange = (text: string, field: 'email' | 'password') => {
    setCredentials({
      ...credentials,
      [field]: text,
    });
  };

  const handleSignIn = async () => {
    const userCredentials = await AuthWithCredentials(credentials, false);
    if (!userCredentials) return null;
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'AppStack', params: { screen: 'Home' } }],
      }),
    );
  };

  useEffect(() => {
    const KeyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardShown(true),
    );
    const KeyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardShown(false),
    );
    return () => {
      KeyboardDidShowListener.remove();
      KeyboardDidHideListener.remove();
    };
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={Colors.White} barStyle='dark-content' />
      {!keyboardShown && (
        <>
          <Pressable onPress={() => setModal(true)} style={styles.locale}>
            <LanguageIcon color={Colors.Primary} />
          </Pressable>
          <LanguageModal
            visible={modal}
            onRequestClose={() => setModal(false)}
          />
          <View style={styles.banner}>
            <SignInBanner height={200} />
          </View>
        </>
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
      <PasswordField
        label='Password'
        placeholder={`Enter your password`}
        onChangeText={value => handleChange(value, 'password')}
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
