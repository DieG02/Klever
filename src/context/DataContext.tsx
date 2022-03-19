import React, {
  createContext,
  useState,
  ContextType,
  useRef,
} from 'react';
import { initialData } from '../utils/constants';
import { Data } from '../utils/interfaces';
import useZustand from '../store/store';
import LocalStorageManager from '../utils/localStorageManager';

//Create Context
export const DataContext = createContext<ContextType<any>>(null);

//Create DataProvider
const DataProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const name = useRef<string>('');
  const storage = new LocalStorageManager();
  const store = useZustand();

  return (
    <DataContext.Provider
      value={{
        name,
        store,
        storage,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;