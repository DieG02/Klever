import { t } from 'i18next';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { AuthProviders } from '../../types';

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
        message: t('toast.auth.google.SIGN_IN_CANCELLED'),
        type: 'error',
      },
      [statusCodes.IN_PROGRESS]: {
        title: 'Info',
        message: t('toast.auth.google.IN_PROGRESS'),
        type: 'info',
      },
      [statusCodes.PLAY_SERVICES_NOT_AVAILABLE]: {
        title: 'Error',
        message: t('toast.auth.google.PLAY_SERVICES_NOT_AVAILABLE'),
        type: 'error',
      },
      default: {
        title: 'Warning',
        message: t('toast.auth.google.DEFAULT'),
        type: 'warning',
      },
    };
    const toastRef = data[error.code] || data.default;
    Toast.show({
      text1: toastRef.title,
      text2: toastRef.message,
      type: toastRef.type,
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
      await userCredentials.user.sendEmailVerification();
      return userCredentials;
    } else {
      const userCredentials = await auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password,
      );
      return userCredentials;
    }
  } catch (error: any) {
    const code = error.code;
    Toast.show({
      text1: 'Error',
      text2: t([`toast.auth.email.${code}`, 'toast.auth.email.DEFAULT']),
      type: 'error',
    });
  }
};

export const AuthLogOut = async () => {
  try {
    const user = auth().currentUser;
    // Show popup or not before init new login
    if (user?.providerData[0].providerId === 'google.com') {
      await GoogleSignin.revokeAccess();
    }
    return auth().signOut();
  } catch (error) {
    console.error('Some error while logging out:', error);
    throw error;
  }
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
  const validationRules = {
    minLength: password.length >= minLength,
    // hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    // hasNumber: /\d/.test(password),
    // hasLowerCase: /[a-z]/.test(password),
    // hasUpperCase: /[A-Z]/.test(password),
    confirmPassword: password === confirm,
  };

  // Find the failed rule and return corresponding error code
  const failedRule = Object.entries(validationRules).find(
    ([rule, passed]) => !passed,
  );

  if (failedRule) {
    const [ruleName, _] = failedRule;
    const errorCodes: any = {
      minLength: 'PASSWORD_TOO_SHORT',
      // hasSpecialChar: 'PASSWORD_NO_SPECIAL_CHAR',
      // hasNumber: 'PASSWORD_NO_NUMBER',
      // hasLowerCase: 'PASSWORD_NO_LOWER_CASE',
      // hasUpperCase: 'PASSWORD_NO_UPPER_CASE',
      confirmPassword: 'PASSWORDS_DO_NOT_MATCH',
    };
    const code = errorCodes[ruleName];
    Toast.show({
      text1: 'Oops',
      text2: t(
        `toast.auth.password.${code}`,
        'toast.auth.password.UNKNOWN_ERROR',
      ),
      type: 'warning',
    });
    return false;
  }
  return true;
};

interface RemoveCredentialsProps {
  success: boolean;
  id?: string;
  error?: any;
}
export const RemoveCredentials = async ({
  provider,
  password,
}: {
  provider: AuthProviders;
  password: string;
}): Promise<RemoveCredentialsProps> => {
  const user = auth().currentUser!;
  const user_id = user.uid;
  const email = user.email!;

  const reauthenticate = async () => {
    if (provider === 'google') {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await user.reauthenticateWithCredential(googleCredential);
    } else {
      const credential = auth.EmailAuthProvider.credential(email, password);
      await user.reauthenticateWithCredential(credential);
    }
  };

  try {
    await reauthenticate();
    await user.delete();
    if (provider === 'google') {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }
    return { success: true, id: user_id };
  } catch (error: any) {
    if (error.code === 'auth/invalid-credential') {
      Toast.show({
        text1: 'Error',
        text2: t('toast.auth.email.auth/invalid-credential'),
        type: 'error',
      });
    } else {
      Toast.show({
        text1: 'Error',
        text2: t('toast.auth.email.DEFAULT'),
        type: 'error',
      });
    }
    return { success: false, error: error };
  }
};
