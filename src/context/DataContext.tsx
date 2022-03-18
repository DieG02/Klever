import React, {
  createContext,
  useState,
  ContextType
} from 'react';
import { initialData } from '../utils/constants';
import { Data } from '../utils/interfaces';
import LocalStorageManager from '../utils/localStorageManager';

//Create Context
export const DataContext = createContext<ContextType<any>>(null);

//Create DataProvider
const DataProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [data, setData] = useState<Data>([]);
  const storage = new LocalStorageManager();

  return (
    <DataContext.Provider
      value={{
        data, setData,
        storage
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;