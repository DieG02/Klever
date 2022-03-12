import { Data } from './interfaces';

export const initialData: Data = [
  {
    title: 'Supermercado',
    items: [
      'Tomate',
      'lechuga',
      'leche',
      'naranja',
      'sandia',
      'albaca',
      'rúcula',
      'piña'
    ],
    completed: false,
  },
  {
    title: 'Trabajo',
    items: [
      'Medialuna',
      'café',
      'jugo de naranja',
      'pan',
      'alfajores',
      'chocolate'
    ],
    completed: true,
  },
  {
    title: 'Escuela',
    items: [
      'Regla',
      'cartulina',
      'escuadra',
      'compás',
      'cartuchera',
      'hojas',
      'lapices',
      'estilografos'
    ],
    completed: false,
  },
]