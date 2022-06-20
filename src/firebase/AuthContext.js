import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebase.config';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import seed from '../seed';
import { importEntries } from '../app/journalSlice';
import { useDispatch, useSelector } from 'react-redux';

const AuthContext = React.createContext(null);
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = getDatabase();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();
  const journal = useSelector((state) => state.journal.entries);
  const database = getDatabase();
  const userRef = ref(database, 'users/' + userId);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        set(userRef, {
          journal: seed,
        });
      }
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    set(userRef, {
      journal,
    });
  }, [journal]);

  useEffect(() => {
    if (userId !== null) {
      const curUserRef = ref(database, `users/${userId}/journal`);
      onValue(curUserRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        dispatch(importEntries(data));
      });
    }
  }, [userId]);

  const upload = () => {
    set(userRef, {
      journal,
    });
  };

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
    dispatch(importEntries([]));
  };

  const value = {
    currentUser,
    signup,
    login,
    resetPassword,
    logout,
    upload,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
