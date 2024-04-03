import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { CardModel, NewItemModel } from '../../types/models';

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

export const getUserCards = async (cards: string[]) => {
  if (!cards.length) return [];
  const cardsPromises = cards.map(async (id: string) => {
    const cardRef = getCard(id);
    const cardSnapshot = await cardRef.get();
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
};

export const getCollectionItems = (id: string, callback: Function) => {
  try {
    // Query the collection based on parentId
    const itemsRef = firestore().collection('items');
    const query = itemsRef.where('parentId', '==', id);

    // Subscribe to changes in the collection
    const unsubscribe = query.onSnapshot(snapshot => {
      // Extract the documents from the query snapshot
      const documents = snapshot.docs.map(doc => doc.data());
      // Invoke the callback function with the updated documents
      callback(documents);
    });

    // Return the unsubscribe function to stop listening to changes
    return unsubscribe;
  } catch (error) {
    console.error('Error subscribing to documents:', error);
    return () => {}; // Return an empty function for unsubscribe
  }
};

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

export const addCard = async (title: string) => {
  const userRef = getUser();
  const cardRef = firestore().collection('cards').doc();
  const card_id = cardRef.id;
  const card: CardModel = {
    id: card_id,
    title: title,
    description: '',
    category: '',
    total: 0,
    current: 0,
    items: [],
  };
  await cardRef.set(card);
  //Linkin cards to current user
  await userRef.update({
    cards: firestore.FieldValue.arrayUnion(card_id),
  });
  return cardRef;
};

export const addItem = async (id: string, item: NewItemModel) => {
  const cardRef = firestore().collection('cards').doc(id);
  const itemRef = firestore().collection('items').doc();
  const card_id = id;
  const item_id = itemRef.id;

  await itemRef.set({
    id: item_id,
    parentId: card_id,
    label: item.label,
    check: item.checked,
  });

  await cardRef.update({
    total: firestore.FieldValue.increment(1),
  });
  return itemRef;
};

export const toggleItem = async (itemId: string, check: boolean) => {
  const itemRef = firestore().collection('items').doc(itemId);
  await itemRef.update({
    check: check,
  });

  const itemSnapshot = await itemRef.get();
  const parentId = itemSnapshot.data()?.parentId;
  if (parentId) {
    const cardRef = firestore().collection('cards').doc(parentId);

    await cardRef.update({
      current: firestore.FieldValue.increment(check ? 1 : -1),
    });
  }
};

export const deleteItem = async (itemId: string) => {
  const itemRef = firestore().collection('items').doc(itemId);
  const itemSnapshot = await itemRef.get();
  const parentId = itemSnapshot.data()?.parentId;

  await itemRef.delete();

  if (parentId) {
    const cardRef = firestore().collection('cards').doc(parentId);

    await cardRef.update({
      total: firestore.FieldValue.increment(-1),
      current: firestore.FieldValue.increment(
        itemSnapshot.data()?.checked ? -1 : 0,
      ),
    });
  }
};
