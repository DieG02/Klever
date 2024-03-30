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
import styles from '../styles/screens/signin';
import { Colors } from '../styles/global';
import { GoogleAuthButton } from '../components';

interface SignInProps {
  navigation: AuthNavigationProps;
}
export default function SignIn({ navigation }: SignInProps) {
  const [keyboardShown, setKeyboardShown] = useState(false);

  const onRedirect = () => {
    navigation.replace('SignUp');
  };

  const keyboardDidShow = () => {
    setKeyboardShown(true);
  };
  const keyboardDidHide = () => {
    setKeyboardShown(false);
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
        onChangeText={value => console.log(value)}
      />
      <InputField
        label='Password'
        placeholder={`Enter your password`}
        secureTextEntry
        marginb={10}
      />
      <Pressable onPress={onRedirect}>
        <Heading type='Medium' color='Label' style={styles.password}>
          Forgot password?
        </Heading>
      </Pressable>

      <Spacing size={20} />

      <MainButton>Sign in</MainButton>
      <Spacing size={20} />
      <GoogleAuthButton />

      <Pressable onPress={onRedirect} style={styles.footer}>
        <Heading type='Medium' color='Label' style={styles.link}>
          <Text>Don't have an account?</Text>
          <Text>{` `}</Text>
          <Text style={styles.hightlight}>Sign up</Text>
        </Heading>
      </Pressable>
    </SafeAreaView>
  );
}
