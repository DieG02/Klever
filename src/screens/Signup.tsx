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
import { Heading, MainButton, InputField, Spacing } from '../components/common';
import { AuthWithCredentials } from '../utils/auth';
import { createNewUser } from '../services/firestore/user';
import { CommonActions } from '@react-navigation/native';
import { NavigationProps } from '../types/navigation';
import { Colors } from '../styles/global';
import styles from '../styles/screens/signup';

interface CredentialsProps {
  email: string;
  password: string;
  confirm: string;
}

interface SignUpProps {
  navigation: NavigationProps;
}
export default function SignUp({ navigation }: SignUpProps) {
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [credentials, setCredentials] = useState<CredentialsProps>({
    email: '',
    password: '',
    confirm: '',
  });

  const keyboardDidShow = () => {
    setKeyboardShown(true);
  };
  const keyboardDidHide = () => {
    setKeyboardShown(false);
  };
  const handleRedirect = () => {
    navigation.replace('AuthStack', { screen: 'SignIn' });
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

  const verifyCredentials = (credentials: CredentialsProps): boolean => {
    // TODO: Insert password rules
    return credentials.password === credentials.confirm;
  };

  const handleSignUp = async () => {
    const verified = verifyCredentials(credentials);
    if (!verified) return null;

    const userCredentials = await AuthWithCredentials(credentials, true);
    if (!userCredentials) return null;
    console.log(JSON.stringify(userCredentials, null, 2));
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
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    // Limpia los listeners cuando el componente se desmonta
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
      <InputField
        label='Password'
        placeholder={`Enter your password`}
        onChangeText={value => handleChange(value, 'password')}
        secureTextEntry
      />
      <InputField
        label='Confirm password'
        placeholder={`Enter confirm password`}
        onChangeText={value => handleChange(value, 'confirm')}
        secureTextEntry
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
