import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

export const todoListSlice = createSlice({
  name: 'journal',
  initialState,

  reducers: {
    addEntry: (state, action) => {
      if (
        !action.payload.name ||
        !action.payload.feeling ||
        !action.payload.entry
      )
        return;
      state.tasks.push(action.payload);
    },
    importEntries: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addEntry, importEntries } = todoListSlice.actions;

export default todoListSlice.reducer;
