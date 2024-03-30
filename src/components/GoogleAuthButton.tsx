import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Heading } from './common';
import { NavigationProps } from '../types/navigation';
import GoogleSvg from '../assets/svg/GoogleSvg';
import { Colors } from '../styles/global';

interface GoogleAuthButtonProps {
  style?: ViewStyle;
}

export default function GoogleAuthButton({ style }: GoogleAuthButtonProps) {
  const navigation = useNavigation<NavigationProps>();

  const authWithGoogle = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
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

  const _signIn = async (user_id: string) => {
    const userDocRef = firestore().collection('users').doc(user_id);
    await userDocRef.get();
    return userDocRef;
  };

  const _signUp = async ({ user, profile }: any) => {
    const userDocRef = firestore().collection('users').doc(user.uid);
    await userDocRef.set({
      email: user.email,
      displayName: user.displayName,
      name: profile.given_name,
      surname: profile.family_name,
      locale: profile.locale,
      birthday: null,
      gender: null,
      picture: user.photoURL,
      phone: user.phoneNumber,
      provider: user.providerData[0].providerId,
      createdAt: firestore.FieldValue.serverTimestamp(),
      updatedAt: firestore.FieldValue.serverTimestamp(),
    });
    return userDocRef;
  };

  const onPress = async () => {
    const userCredentials = await authWithGoogle();
    const isNewUser = userCredentials?.additionalUserInfo?.isNewUser;
    if (isNewUser) {
      await _signUp({
        user: userCredentials.user,
        profile: userCredentials.additionalUserInfo?.profile,
      });
      // TODO: Redirect to complete profile
      navigation.reset({
        index: 0,
        routes: [{ name: 'AppStack' }],
      });
    } else {
      await _signIn(userCredentials!.user.uid);
      // Redirect to home screen
      navigation.reset({
        index: 0,
        routes: [{ name: 'AppStack' }],
      });
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && { elevation: 0 },
        style,
      ]}
      onPress={onPress}>
      <GoogleSvg width={24} height={24} />
      <Heading
        color='Placeholder'
        type='Medium'
        style={{ marginLeft: 15, fontSize: 13 }}>
        Continue with Google
      </Heading>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Background,
    borderRadius: 25,
    marginBottom: 15,
    flexDirection: 'row',
    elevation: 1,
  },
});
