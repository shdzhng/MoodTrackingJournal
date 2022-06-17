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
import { importJournal } from '../app/journalSlice';
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
  const userRef = userId ? ref(database, 'users/' + userId) : null;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) setUserId(user.uid);
  });

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  useEffect(() => {
    if (userRef === null) return;
    set(userRef, {
      journal: seed,
    });
  }, [userRef]);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val().journal);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userRef]);

  //update cloud when local journal updates
  // useEffect(() => {
  //   if (userId) set(userRef, journal);
  // }, [journal]);

  const signup = (email, passsword) => {
    return auth.createUserWithEmailAndPassword(email, passsword);
  };

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password);
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
