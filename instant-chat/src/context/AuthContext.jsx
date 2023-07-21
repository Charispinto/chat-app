import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUSer] = useState("John Doe");
  const [loading, setLoading] = useState(true);

  const signinwithgoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logout = () => signOut(auth);

  const value = {
    currentUser,
    setCurrentUSer,
    signinwithgoogle,
    logout,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUSer(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
