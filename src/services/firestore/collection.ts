import firestore from '@react-native-firebase/firestore';
import { ItemModel } from '../../types/models';
import Toast from 'react-native-toast-message';
import { t } from 'i18next';

export const addItem = async (parent_id: string, item: Partial<ItemModel>) => {
  const batch = firestore().batch();
  const boardRef = firestore().collection('boards').doc(parent_id);
  const itemRef = firestore().collection('items').doc();
  const item_id = itemRef.id;

  const boardUpdate = {
    total: firestore.FieldValue.increment(1),
  };

  const itemData: ItemModel = {
    id: item_id,
    parent_id: parent_id,
    label: item.label!,
    checked: item?.checked || false,
    created_at: firestore.FieldValue.serverTimestamp(),
  };

  batch.set(itemRef, itemData);
  batch.update(boardRef, boardUpdate);
  await batch.commit();

  return itemRef;
};

export const toogleItemStatus = async (parent_id: string, item: ItemModel) => {
  const batch = firestore().batch();
  const boardRef = firestore().collection('boards').doc(parent_id);
  const itemRef = firestore().collection('items').doc(item.id);
  const incrementValue = !item.checked ? 1 : -1;

  batch.update(itemRef, {
    checked: !item.checked,
  });
  batch.update(boardRef, {
    current: firestore.FieldValue.increment(incrementValue),
    updated_at: firestore.FieldValue.serverTimestamp(),
  });

  await batch.commit();
};

export const removeItem = async (parent_id: string, item: ItemModel) => {
  const batch = firestore().batch();
  const boardRef = firestore().collection('boards').doc(parent_id);
  const itemRef = firestore().collection('items').doc(item.id);
  const incrementValue = item.checked ? -1 : 0;

  batch.delete(itemRef);
  batch.update(boardRef, {
    total: firestore.FieldValue.increment(-1),
    current: firestore.FieldValue.increment(incrementValue),
    updated_at: firestore.FieldValue.serverTimestamp(),
  });

  await batch.commit();
  Toast.show({
    text1: t('toast.user.collection.delete.title'),
    text2: t('toast.user.collection.delete.message'),
    type: 'success',
  });
};
