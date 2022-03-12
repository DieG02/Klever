import React, {
  createContext,
  useState,
  ContextType
} from 'react';
import { initialData } from '../utils/constants';
import { Data } from '../utils/interfaces';

//Create Context
export const DataContext = createContext<ContextType<any>>(null);

//Create DataProvider
const DataProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [data, setData] = useState<Data>([]);

  return (
    <DataContext.Provider
      value={{
        data, setData
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;