import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [userinfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={{ userinfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};



