import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const AuthWithGoogle = async () => {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    const { idToken } = await GoogleSignin.signIn();
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

export const AuthWithCredentials = async (
  credentials: any,
  register: boolean,
) => {
  try {
    if (register) {
      const userCredentials = await auth().createUserWithEmailAndPassword(
        credentials.email,
        credentials.password,
      );
      // WORKS!!!! Now redirect to home screen with data loaded.
      await userCredentials.user.sendEmailVerification();
      console.log('User account created!');
      return userCredentials;
    } else {
      const userCredentials = await auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password,
      );
      console.log('User signed in!');
      return userCredentials;
    }
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    if (error.code === 'auth/invalid-credential') {
      console.error(error);
    }
  }
};

type AuthProviders = 'google' | 'email';
export const FirebaseSignUp = async (user: any, provider: AuthProviders) => {
  const userDocRef = firestore().collection('users').doc(user.uid);
  const locale = auth().languageCode;
  const displayName = user.displayName?.split(' ')[0];
  const userData = {
    email: user.email,
    locale: locale || 'en-US', // TODO: Take locale from system, email or pick one
    displayName: displayName || 'User',
    cards: [], // TODO: Change to implemented after sucess auth (Include Card Model)
    gender: null,
    birthday: null,
    provider: provider,
    avatar: user?.photoURL, //TODO: Set a default avatar
    phone: user?.phoneNumber,
    emailVerified: user.emailVerified,
    createdAt: firestore.FieldValue.serverTimestamp(),
    updatedAt: firestore.FieldValue.serverTimestamp(),
  };

  await userDocRef.set(userData);
  return userDocRef;
};
