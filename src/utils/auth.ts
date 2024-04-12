import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Toast from 'react-native-toast-message';

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
    const data = {
      [statusCodes.SIGN_IN_CANCELLED]: {
        title: 'Error',
        message: 'Sign in process was cancelled!',
        type: 'error',
      },
      [statusCodes.IN_PROGRESS]: {
        title: 'Info',
        message: 'Another process in progress',
        type: 'info',
      },
      [statusCodes.PLAY_SERVICES_NOT_AVAILABLE]: {
        title: 'Error',
        message: 'Play services not available',
        type: 'error',
      },
      default: {
        title: 'Warning',
        message: 'Something went wrong, check your network connection',
        type: 'warning',
      },
    };
    const toastRef = data[error.code] || data.default;
    Toast.show({
      text1: toastRef.title,
      text2: toastRef.message,
      type: toastRef.type,
      position: 'bottom',
    });
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
