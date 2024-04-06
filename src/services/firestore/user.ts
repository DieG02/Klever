import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { UserModel } from '../../types/models';
import { getCard } from '.';

type AuthProviders = 'google' | 'email';
export const createNewUser = async (user: any, provider: AuthProviders) => {
  const userDocRef = firestore().collection('users').doc(user.uid);
  const locale = auth().languageCode;
  const displayName = user.displayName?.split(' ')[0];

  const userData: UserModel = {
    email: user.email,
    locale: locale || 'en-US', // TODO: Take locale from system, email or pick one
    display_name: displayName || 'User',
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

// Deprecated!
export const getUser = () => {
  const id = auth().currentUser?.uid;
  const userRef = firestore().collection('users').doc(id);
  return userRef;
};

// Deprecated!
export const getUserCards = async (cards: string[]) => {
  if (!cards.length) return [];
  const cardsPromises = cards.map(async (id: string) => {
    const cardRef = getCard(id);
    const cardSnapshot = await cardRef.get();
    return cardSnapshot.data();
  });
  return Promise.all(cardsPromises);
};

// Deprecated!
export const createUser = async (user: any, profile: any) => {
  const userRef = firestore().collection('users').doc(user.uid);
  await userRef.set({
    email: user.email,
    displayName: user.displayName,
    name: profile.given_name,
    surname: profile.family_name,
    locale: profile.locale,
    cards: [],
    birthday: null,
    gender: null,
    picture: user.photoURL,
    phone: user.phoneNumber,
    provider: user.providerData[0].providerId,
    createdAt: firestore.FieldValue.serverTimestamp(),
    updatedAt: firestore.FieldValue.serverTimestamp(),
  });
  return userRef;
};
