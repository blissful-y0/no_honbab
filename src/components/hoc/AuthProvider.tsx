import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";

export const AuthContext = createContext({
  user: {},
  setUser: (_: any) => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}></AuthContext.Provider>
  );
};
