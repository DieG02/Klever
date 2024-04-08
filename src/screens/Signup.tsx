import { useEffect, useState } from 'react';
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import SignUpBanner from '../assets/app/SignUpBanner';
import {
  Heading,
  MainButton,
  InputField,
  PasswordField,
  Spacing,
} from '../components/common';
import { AuthWithCredentials } from '../utils/auth';
import { createNewUser } from '../services/firestore/user';
import { CommonActions } from '@react-navigation/native';
import { AuthNavigationProps } from '../types/navigation';
import { VerifyCredentials } from '../utils/auth';
import { Colors } from '../styles/global';
import styles from '../styles/screens/signup';

interface CredentialsProps {
  email: string;
  password: string;
  confirm: string;
}

interface SignUpProps {
  navigation: AuthNavigationProps;
}
export default function SignUp({ navigation }: SignUpProps) {
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [credentials, setCredentials] = useState<CredentialsProps>({
    email: '',
    password: '',
    confirm: '',
  });

  const handleRedirect = () => {
    navigation.replace('SignIn');
  };

  const handleChange = (
    text: string,
    field: 'email' | 'password' | 'confirm',
  ) => {
    setCredentials({
      ...credentials,
      [field]: text,
    });
  };

  const handleSignUp = async () => {
    const verified = VerifyCredentials(credentials);
    if (!verified) return null;

    const userCredentials = await AuthWithCredentials(credentials, true);
    if (!userCredentials) return null;

    const isNewUser = userCredentials?.additionalUserInfo?.isNewUser;
    if (isNewUser) {
      await createNewUser(userCredentials.user, 'email');
      // TODO: Redirect to complete profile
    }

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
        <View style={styles.banner}>
          <SignUpBanner height={190} />
        </View>
      )}

      <Heading type='Semibold' style={styles.header}>
        <Text>Sign up to</Text>
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
      />
      <PasswordField
        label='Confirm password'
        placeholder={`Enter confirm password`}
        onChangeText={value => handleChange(value, 'confirm')}
      />
      <Spacing size={20} />

      <MainButton onPress={handleSignUp}>Sign up</MainButton>

      <Pressable onPress={handleRedirect} style={styles.footer}>
        <Heading type='Medium' color='Label' style={styles.link}>
          <Text>Already have an account?</Text>
          <Text>{` `}</Text>
          <Text style={styles.hightlight}>Sign in</Text>
        </Heading>
      </Pressable>
    </SafeAreaView>
  );
}
