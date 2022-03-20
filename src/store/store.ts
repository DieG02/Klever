import create from 'zustand'

const useZustand = create((set: any) => ({
  boards: [
    {
      title: 'Escuela',
      items: new Array(),
    },
    {
      title: 'Supermercado',
      items:  new Array(),
    },
  ],
  addItems: (title: string, item: any | any[]) => set(({ boards }: any) => {
    const list = boards.filter((list: any) => list.title === title)[0];
    return list.items = [...list.items, item];
  }),
  removeItems: (title: string, item: any | any[]) => set(({ boards }: any) => {
    const list = boards.filter((list: any) => list.title === title)[0];
    const aux: any = new Set(list.items);
    aux.delete(item);
    console.log(Array.from(aux));
    return list.items = Array.from(aux);
  }),
  addBoard: (title: string, items?: any | any[]) => set(({ boards }: any) => {
    return boards.unshift({
      title,
      items: items || new Array(),
    })
  }),
}))



export default useZustand;