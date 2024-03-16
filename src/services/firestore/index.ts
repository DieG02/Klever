import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const getUser = () => {
  const id = auth().currentUser?.uid;
  const userRef = firestore().collection('users').doc(id);
  return userRef;
};

export const getCard = (id: string) => {
  const cardRef = firestore().collection('cards').doc(id);
  return cardRef;
};

export const getItem = (id: string) => {
  const itemRef = firestore().collection('items').doc(id);
  return itemRef;
};

export const getUserCards = async () => {
  const userRef = getUser();
  const userSnapshot = await userRef.get();
  const user = userSnapshot.data();
  if(!(user?.cards.length)) return [];

  const cardsPromises = user.cards.map(async (id: string) => {
    const cardSnapshot = await getCard(id).get();
    return cardSnapshot.data();
  });
  return Promise.all(cardsPromises);
};

export const getCardItems = async (id: string) => {
  const cardRef = getCard(id);
  const cardSnapshot = await cardRef.get();
  const cards = cardSnapshot.data();

  const itemsPromises = cards?.items.map(async (id: string) => {
    const itemSnapshot = await getItem(id).get();
    return itemSnapshot.data();
  });
  return Promise.all(itemsPromises);
}

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

export const addCard = async (card: any) => {
  const userRef = getUser();
  const cardRef = firestore().collection('cards').doc();
  const card_id = cardRef.id;

  await userRef.update({
    cards: firestore.FieldValue.arrayUnion(card_id),
  });
  await cardRef.set({
    title: card.title,
    description: card.description,
    total: card.total || 0,
    current: card.current || 0,
    items: [],
  });
  return cardRef;
};

export const addItem = async (id: string, item: any) => {
  const cardRef = getCard(id);
  const itemRef = firestore().collection('items').doc();
  const item_id = itemRef.id;

  await cardRef.update({
    items: firestore.FieldValue.arrayUnion(item_id),
  });
  await itemRef.set({
    label: item.label,
    check: item.checked
  });
  return itemRef;
};