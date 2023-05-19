import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();
const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // logout
  const logout = () => {
    return signOut(auth);
  };

  // current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    googleSignIn,
    logout,
    auth,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
