import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { db } from '../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import seed from '../seed';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'journal');

  useEffect(() => {
    const getUsers = async () => {
      const journal = await getDocs(usersCollectionRef);
      setUsers(journal.docs.map((doc) => ({ ...doc.data() })));
    };

    getUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const signup = (email, passsword) => {
    return auth.createUserWithEmailAndPassword(email, passsword);
  };

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);

    seed.forEach((entry) => {
      addDoc(usersCollectionRef, entry);
    });
  };

  const resetPassword = (email) => {
    auth.sendPasswordResetEmail(email);
  };

  const logout = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    resetPassword,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
