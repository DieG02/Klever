export interface User {
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

export interface Card {
  id: string;
  title: string;
  description: string;
  category: string; // TODO: Set categories enum
  total: number;
  current: number;
  items: string[];
};

export interface Item {
  id: string
  label: string;
  checked: boolean;
};

export type Items = Item[];