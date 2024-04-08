import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { UserModel } from '../../types/models';

type AuthProviders = 'google' | 'email';
export const createNewUser = async (user: any, provider: AuthProviders) => {
  const userDocRef = firestore().collection('users').doc(user.uid);
  const locale = auth().languageCode;
  const displayName =
    user.displayName?.split(' ')[0] || user.email.split('@')[0];

  const userData: UserModel = {
    email: user.email,
    display_name: displayName,
    locale: locale,
    gender: null,
    birthday: null,
    provider: provider,
    avatar: user?.photoURL, //TODO: Set a default avatar
    phone: user?.phoneNumber,
    email_verified: user.emailVerified,
    created_at: firestore.FieldValue.serverTimestamp(),
    updated_at: firestore.FieldValue.serverTimestamp(),
  };

  await userDocRef.set(userData);
  return userDocRef;
};

export const updateLocale = async (locale: string) => {
  try {
    const user = auth().currentUser;
    if (!!user) {
      const userDocRef = firestore().collection('users').doc(user.uid);
      await userDocRef.update({
        locale: locale,
        updated_at: firestore.FieldValue.serverTimestamp(),
      });
    }
    await auth().setLanguageCode(locale);
    return { success: true };
  } catch (error) {
    console.error('Error updating user locale:', error);
    return { success: false, error };
  }
};
