import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  entries: [],
};

export const todoListSlice = createSlice({
  name: 'journal',
  initialState,

  reducers: {
    addEntry: (state, { payload }) => {
      if (!payload.name || !payload.feeling || !payload.entry) return;
      state.entries.push(payload);
    },

    importEntries: (state, { payload }) => {
      state.entries = payload;
    },

    removeEntry: (state, { payload }) => {
      const entryId = payload.id;
      const filteredEntry = state.entries.filter(
        (entry) => entry.id !== entryId
      );
      state.entries = filteredEntry;
    },

    sortEntries: (state, { payload }) => {
      switch (payload) {
        case 'newstFirst':
          state.entries = state.entries.sort((a, b) =>
            a.date < b.date ? 1 : -1
          );
          break;
        case 'oldestFirst':
          state.entries = state.entries.sort((a, b) =>
            a.date > b.date ? 1 : -1
          );
          break;
        case 'positivesFirst':
          state.entries = state.entries.sort((a, b) =>
            a.feelingKey < b.feelingKey ? 1 : -1
          );
          break;
        case 'negativesFirst':
          state.entries = state.entries.sort((a, b) =>
            a.feelingKey > b.feelingKey ? 1 : -1
          );
          break;
      }
    },
  },
});

export const { addEntry, removeEntry, sortEntries, importEntries } =
  todoListSlice.actions;

export default todoListSlice.reducer;
