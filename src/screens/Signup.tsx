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
import { AuthNavigationProps } from '../types/navigation';
import styles from '../styles/screens/signup';
import { Colors } from '../styles/global';

interface SignUpProps {
  navigation: AuthNavigationProps;
}
export default function SignUp({ navigation }: SignUpProps) {
  const [keyboardShown, setKeyboardShown] = useState(false);

  const onRedirect = () => {
    navigation.replace('SignIn');
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
        onChangeText={value => console.log(value)}
      />
      <InputField
        label='Password'
        placeholder={`Enter your password`}
        secureTextEntry
      />
      <InputField
        label='Confirm password'
        placeholder={`Enter confirm password`}
        secureTextEntry
      />
      <Spacing size={20} />

      <MainButton>Sign up</MainButton>

      <Pressable onPress={onRedirect} style={styles.footer}>
        <Heading type='Medium' color='Label' style={styles.link}>
          <Text>Already have an account?</Text>
          <Text>{` `}</Text>
          <Text style={styles.hightlight}>Sign in</Text>
        </Heading>
      </Pressable>
    </SafeAreaView>
  );
}
