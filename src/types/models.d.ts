export interface UserModel {
  avatar: string | null;
  birthday: Date | null;
  cards: string[];
  createdAt: Date;
  displayName: string;
  email: string;
  emailVerified: boolean;
  gender: 'male' | 'female' | null;
  locale: string;
  phone: string | null;
  provider: 'email' | 'google';
  updatedAt: Date;
}

export interface CardModel {
  id: string;
  title: string;
  description: string;
  category: string; // TODO: Set categories enum
  total: number;
  current: number;
  items: string[];
}

export interface ItemModel {
  id: string;
  parentId: string;
  label: string;
  checked: boolean;
}

export interface NewItemModel {
  label: string;
  checked: boolean;
}
