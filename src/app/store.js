import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoListReducer from './journalSlice';

export const store = configureStore({
  reducer: {
    journal: todoListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
