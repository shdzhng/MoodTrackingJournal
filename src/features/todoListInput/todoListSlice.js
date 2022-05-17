import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,

  reducers: {
    addTask: (state, action) => {
      console.log(action.type);
      if (!action.payload.name || !action.payload.priority) return;
      state.tasks.push(action.payload);
    },
    toggleTodoComplete: (state, action) => {
      console.log(action.type);
      const todoId = action.payload;
      const todoItem = state.tasks.find((todo) => todoId === todo.id);
      todoItem.completed = !todoItem.completed;
    },
    clearAllCompleted: (state, action) => {
      console.log(action.type);
      state.tasks = state.tasks.filter((todo) => !todo.completed);
    },
    clearTodoList: (state) => {
      state.tasks = [];
    },
  },
});

export const { addTask, toggleTodoComplete, clearTodoList, clearAllCompleted } =
  todoListSlice.actions;

export default todoListSlice.reducer;
