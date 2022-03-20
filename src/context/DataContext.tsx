import React, {
  createContext,
  useState,
  ContextType,
  useRef,
} from 'react';
import LocalStorageManager from '../utils/localStorageManager';

//Create Context
export const DataContext = createContext<ContextType<any>>(null);

//Create DataProvider
const DataProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const name = useRef<string>('');
  const storage = new LocalStorageManager();

  return (
    <DataContext.Provider
      value={{
        name,
        storage,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;