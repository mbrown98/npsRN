import React, {useState, createContext, useContext} from 'react';

const AuthContext = createContext(undefined);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Auth must be used within an auth provider');
  }
  return context;
}

const AuthProvider = ({children, ...props}) => {
  const [user, setUser] = useState(null);
  return <AuthContext.Provider value={{user, setUser}} {...props} />;
};

export {AuthProvider, useAuth};
