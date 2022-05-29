import create from 'zustand'


export default create((set: any) => ({
  // Use idList to call database from each list view
  idList: null,
  updateIdList: (id: string) => set({ idList: id }), 

  // Use isLoading to show a spinner while is fetching results
  isLoading: false,
  startLoading: () => set({ isLoading: true }),
  stopLoading: () => set({ isLoading: false }),


  // Boards --> Lists contentainer (Board)
  boards: [],
  // Items --> All items by list, use idList as key (List)
  items: {},
  // Default categories from items, optional
  categories: [],
  // Default items catalogue
  allItems: [
    { name: 'leche', selected: false },
    { name: 'pan', selected: false },
    { name: 'aceite', selected: false },
    { name: 'café', selected: false },
    { name: 'tomate', selected: false },
    { name: 'lechuga', selected: false },
    { name: 'zanahoria', selected: false },
    { name: 'cebolla', selected: false },
    { name: 'zapallo', selected: false },
    { name: 'frijoles', selected: false },
  ],

  addItems: (title: string, item: any | any[]) => set(({ boards }: any) => {
    const list = boards.find((list: any) => list.title === title);
    return list.items = [...list.items, item];
  }),
  updateItems: (idList: string, value: any) => set(({ items }: any) => {
    return {
      items: {
        ...items,
        [idList]: items[idList].map((obj: any) => {
          if (obj.id === value.id) return value;
          return obj
        })
      }
    }
  }), 
  removeItems: (title: string, item: any | any[]) => set(({ boards }: any) => {
    const list = boards.find((list: any) => list.title === title);
    const aux: any = new Set(list.items);
    aux.delete(item);
    return list.items = Array.from(aux);
  }),
  addBoard: (value: any) => set(({ boards }: any) => {
    if(Array.isArray(value)) {
      return value.map((board) => boards.unshift(board));
    } else {
      return boards.unshift(value);
    }
  }),
  // Remove each list from the deleted board
  // removeBoard: () => set(() => {

  // }),
  setInitialData: (response: any) => set({ 
    boards: response.boards,
    items: response.items,
    categories: response.categories,
  }),
}));