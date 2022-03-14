import React, {useState, createContext, useContext} from 'react';

const GlobalContext = createContext(undefined);

function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('Global context must be used within a global provider');
  }
  return context;
}

const AuthProvider = ({children, ...props}) => {
  const [user, setUser] = useState(null);
  return <GlobalContext.Provider value={{user, setUser}} {...props} />;
};

export {AuthProvider, useGlobal};
