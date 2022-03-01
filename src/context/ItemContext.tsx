import React, { 
  createContext, 
  useState,
  ContextType
} from 'react';

//Create Context
export const ListContext = createContext<ContextType<any>>(null);

//Create ListProvider
const ListProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [listItems, setListItems] = useState<[]>([]);

  return (
    <ListContext.Provider 
      value={{ 
        listItems, setListItems
      }}
    >
      {children}
    </ListContext.Provider>
  )
}

export default ListProvider;


