import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoListReducer from '../features/journal/journalSlice';

export const store = configureStore({
  reducer: {
    journal: todoListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
