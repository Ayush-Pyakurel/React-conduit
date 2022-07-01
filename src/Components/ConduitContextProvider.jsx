import React, { useContext, useState, createContext } from 'react';

//creating context to store the required data
const conduitContext = createContext({});

export const useConduitContext = () => {
  return useContext(conduitContext);
};

export function ConduitContextProvider({ children }) {
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState();

  //console.log(loggedInStatus);

  const logInCheck = (status) => {
    if (status === 200 || status === 201) {
      return setLoggedInStatus(true);
    } else if (status === 401 || status === 400) {
      alert('error occured!!!');
    }
  };

  console.log(loggedInStatus);

  return (
    <conduitContext.Provider
      value={{
        logInCheck,
        setLoggedInUser,
        loggedInStatus,
        loggedInUser,
      }}
    >
      {children}
    </conduitContext.Provider>
  );
}

export default ConduitContextProvider;
