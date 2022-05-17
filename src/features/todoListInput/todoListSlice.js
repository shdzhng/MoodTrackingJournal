import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,

  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = todoListSlice.actions;

export default todoListSlice.reducer;
