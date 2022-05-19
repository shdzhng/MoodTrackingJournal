import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  entries: [],
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
      state.entries.push(action.payload);
    },
    importEntries: (state, action) => {
      state.entries = action.payload;
    },
  },
});

export const { addEntry, importEntries } = todoListSlice.actions;

export default todoListSlice.reducer;
