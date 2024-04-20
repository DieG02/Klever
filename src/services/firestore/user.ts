import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { UserModel } from '../../types/models';
import { AuthProviders } from '../../types';
import i18next, { t, changeLanguage } from 'i18next';
import Toast from 'react-native-toast-message';

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
    const currentLocale = i18next.language;
    if (currentLocale === locale) return;

    changeLanguage(locale);
    if (user) {
      const userDocRef = firestore().collection('users').doc(user?.uid);
      userDocRef.update({
        locale: locale,
        updated_at: firestore.FieldValue.serverTimestamp(),
      });
    }
    Toast.show({
      text1: t('toast.user.locale.update.title'),
      text2: t('toast.user.locale.update.message'),
      type: 'success',
    });
  } catch (error) {
    console.error('Error updating user locale:', error);
  }
};
