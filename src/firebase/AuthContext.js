import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './firebase.config';
import { getDatabase, ref, set, get, child } from 'firebase/database';
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
  const database = getDatabase();

  const journal = useSelector((state) => state.journal.entries);
  const userRef = ref(database, 'users/' + userId);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // listens for user login information and seeds the user's collection with demo seed
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

  // updates the users firebase collection data everytime their local journal is changed including when it is seeded
  useEffect(() => {
    set(userRef, {
      journal,
    });
  }, [journal]);

  // fetches journal collection data based on userId and fills local redux store with data accordingly
  useEffect(() => {
    if (userId !== null) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${userId}/journal`))
        .then((snapshot) => {
          const data = snapshot.val();

          // if cloud data exists the then update redux store with cloud data else update it with seed, and the seed will be updated to cloud
          if (snapshot.exists()) {
            dispatch(importEntries(data));
          } else {
            dispatch(importEntries(seed));
          }
        })
        .catch((error) => {
          console.error(error);
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
    setUserId(null);
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
