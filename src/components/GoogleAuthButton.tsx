import { NavigationProps, RouteProps, AuthRouteProps } from '../types/navigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import auth from '@react-native-firebase/auth';

import GoogleSvg from '../assets/svg/GoogleSvg';
import { Colors } from '../styles/global';
import { Parragraph } from './common';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

interface GoogleAuthButtonProps {
  style?: ViewStyle;
};
export function GoogleAuthSignInButton({ style }: GoogleAuthButtonProps) {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps<'AuthStack'>>();

  
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      return userInfo;
    } catch (error: any) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED: 
          console.log('Cancelled');
          break;
        case error.code === statusCodes.IN_PROGRESS:
          console.log('In progress...');
          break;
        case error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log('Play services not available');
          break;

        default:
          console.log('Some error', error);
          break;
      }
    }
  };

  const _signIn= async () => {
    const session = await signInWithGoogle();
    console.log({ session });
    if(session) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'AppStack' }],
      });
    }
  };

  return (
    <Pressable style={[styles.container, style]} onPress={_signIn}>
      <GoogleSvg width={24} height={24}/>
      <Parragraph size='md' style={{ marginLeft: 15 }}>
        Continue with Google
      </Parragraph>
    </Pressable>
  )
};

export function GoogleAuthSignUpButton({ style }: GoogleAuthButtonProps) {
  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<AuthRouteProps<'SignUp'>>();

  const signUpWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error: any) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED: 
          console.log('Cancelled');
          break;
        case error.code === statusCodes.IN_PROGRESS:
          console.log('In progress...');
          break;
        case error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log('Play services not available');
          break;

        default:
          console.log('Some error', error);
          break;
      }
    }
  };

  const _signUp= async () => {
    const session = await signUpWithGoogle();
    console.log({ session });
    if(session) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'AppStack' }],
      });
    }
  };

  return (
    <Pressable style={[styles.container, style]} onPress={_signUp}>
      <GoogleSvg width={24} height={24}/>
      <Parragraph size='md' style={{ marginLeft: 15 }}>
        Sign up with Google
      </Parragraph>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Background,
    borderRadius: 25,
    marginBottom: 15,
    flexDirection: 'row',
  },
});