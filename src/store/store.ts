import create from 'zustand'

const useZustand = create((set: any) => ({
  count: 1,
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  decrement: () => set((state: any) => ({ count: state.count - 1 })),

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
    list.items.push(item)
  }),
  addBoard: (title: string, items?: any | any[]) => set(({ boards }: any) => {
    boards.unshift({
      title,
      items: items || new Array(),
    })
  }),
  // addBoard: (name?: string) => console.log('Hola ' + name),
}))



export default useZustand;