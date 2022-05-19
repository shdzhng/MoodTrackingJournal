import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

export const todoListSlice = createSlice({
  name: 'journal',
  initialState,

  reducers: {
    addTask: (state, action) => {
      if (
        !action.payload.name ||
        !action.payload.feeling ||
        !action.payload.entry
      )
        return;
      state.tasks.push(action.payload);
    },
    toggleTodoComplete: (state, action) => {
      const todoId = action.payload;
      const todoItem = state.tasks.find((todo) => todoId === todo.id);
      todoItem.completed = !todoItem.completed;
    },
    clearAllCompleted: (state, action) => {
      state.tasks = state.tasks.filter((todo) => !todo.completed);
    },
    clearTodoList: (state) => {
      state.tasks = [];
    },
    importTodoList: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const {
  addTask,
  toggleTodoComplete,
  importTodoList,
  clearTodoList,
  clearAllCompleted,
} = todoListSlice.actions;

export default todoListSlice.reducer;
