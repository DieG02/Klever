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

export const AuthLogOut = async () => {
  const user = auth().currentUser;
  // Show popup or not before init new login
  if (user?.displayName) GoogleSignin.revokeAccess();
  await auth().signOut();
  return auth().currentUser;
};

interface CredentialsProps {
  email: string;
  password: string;
  confirm: string;
}
export const VerifyCredentials = (credentials: CredentialsProps): boolean => {
  const { password, confirm } = credentials;
  const minLength = 8;

  // Password validation rules
  const validationRules = [
    password.length >= minLength,
    // /[!@#$%^&*(),.?":{}|<>]/.test(password), // Has special char
    // /\d/.test(password), // Has number
    // /[a-z]/.test(password), // Has lower case
    // /[A-Z]/.test(password), // Has upper case
    password === confirm,
  ];

  // Confirm that all rules are passed
  const isSecure = validationRules.every(rule => rule);

  return isSecure;
};
