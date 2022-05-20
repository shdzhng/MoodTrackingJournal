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

    updateEntry: (state, { payload }) => {
      const entryId = payload.id;
      const filteredEntry = state.entries.filter(
        (entry) => entry.id !== entryId
      );
      state.entries = filteredEntry;
      state.entries.push(payload);
    },

    removeEntry: (state, { payload }) => {
      const entryId = payload.id;
      const filteredEntry = state.entries.filter(
        (entry) => entry.id !== entryId
      );
      state.entries = filteredEntry;
    },

    sortEntries: (state, { payload }) => {
      const feelingKey = {
        loved: 6,
        happy: 5,
        calm: 4,
        anxious: 3,
        sad: 2,
        angry: 1,
      };

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
          state.entries = state.entries.sort((a, b) => {
            const aFeelingKey = feelingKey[a.feeling];
            const bFeelingKey = feelingKey[b.feeling];
            return aFeelingKey < bFeelingKey ? 1 : -1;
          });
          break;
        case 'negativesFirst':
          state.entries = state.entries.sort((a, b) => {
            const aFeelingKey = feelingKey[a.feeling];
            const bFeelingKey = feelingKey[b.feeling];
            return aFeelingKey > bFeelingKey ? 1 : -1;
          });
          break;
      }
    },
  },
});

export const {
  addEntry,
  removeEntry,
  sortEntries,
  importEntries,
  updateEntry,
} = todoListSlice.actions;

export default todoListSlice.reducer;
