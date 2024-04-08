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
    locale: locale || 'en-US', // TODO: Take locale from system, email or pick one
    display_name: displayName,
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
