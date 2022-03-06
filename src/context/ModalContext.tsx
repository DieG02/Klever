import React, {
  createContext,
  useState,
  ContextType
} from 'react';

//Create Context
export const ModalContext = createContext<ContextType<any>>(null);

//Create ModalProvider
const ModalProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        isVisible, setVisible
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider;


