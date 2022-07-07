import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import journalReducer from './journalSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    journal: journalReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
