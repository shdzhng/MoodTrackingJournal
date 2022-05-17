import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from '../features/todoListInput/todoListSlice';

export const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
