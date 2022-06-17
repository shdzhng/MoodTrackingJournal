import React, { useContext, useEffect, useState, createContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebase.config';
import {
  getDatabase,
  onValue,
  child,
  ref,
  set,
  get,
  push,
} from 'firebase/database';
import { collection, addDoc } from 'firebase/firestore';
import seed from '../seed';
import { importEntries } from '../app/journalSlice';
import { useDispatch, useSelector } from 'react-redux';

const AuthContext = React.createContext(null);
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();
  ////
  const journal = useSelector((state) => state.journal.entries);
  const database = getDatabase();
  const userRef = ref(database, 'users/' + userId);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) setUserId(user.uid);
  });

  useEffect(() => {
    console.log(userId);
    fetchUserEntries();
  }, [userId]);

  useEffect(() => {
    if (userRef === null) return;
    set(userRef, {
      journal: seed,
    });
  }, [userRef]);

  const fetchUserEntries = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val().journal;
          dispatch(importEntries(data));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (userId) {
      set(userRef, {});
      // set(userRef, journal);
    }
  }, [journal]);

  const signup = (email, passsword) => {
    return auth.createUserWithEmailAndPassword(email, passsword);
  };

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
    fetchUserEntries();
  };

  const resetPassword = (email) => {
    auth.sendPasswordResetEmail(email);
  };

  const logout = () => {
    auth.signOut();
    dispatch(importEntries([]));
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
