export interface UserModel {
  birthday: Date; 
  cards: string[];
  createdAt: Date;
  displayName: string;
  email: string;
  gender: 'male' | 'female' | null;
  locale: string;
  name: string;
  phone: string;
  picture: string;
  provider: string;
  surname: string;
  updatedAt: Date;
};

export interface CardModel {
  id: string;
  title: string;
  description: string;
  category: string; // TODO: Set categories enum
  total: number;
  current: number;
  items: string[];
};

export interface ItemModel {
  id: string;
  parentId: string;
  label: string;
  checked: boolean;
};

export interface NewItemModel {
  label: string;
  checked: boolean;
};