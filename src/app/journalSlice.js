import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: [],
};

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    removeJournal: (state) => {
      return {
        entries: [],
      };
    },

    addEntry: (state, { payload }) => {
      if (!payload.name || !payload.feeling || !payload.entry) return;
      return {
        entries: [...state.entries, payload],
      };
    },

    importEntries: (state, { payload }) => {
      return {
        entries: payload,
      };
    },

    updateEntry: (state, { payload }) => {
      const entryId = payload.id;
      const filteredEntries = state.entries.filter(
        (entry) => entry.id !== entryId
      );
      return {
        entries: [...filteredEntries, payload],
      };
    },

    removeEntry: (state, { payload }) => {
      const entryId = payload.id;
      const filteredEntries = state.entries.filter(
        (entry) => entry.id !== entryId
      );
      return {
        entries: filteredEntries,
      };
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
        case 'longestFirst':
          state.entries = state.entries.sort((a, b) => {
            return a.entry.length < b.entry.length ? 1 : -1;
          });
          break;
        case 'shortestFirst':
          state.entries = state.entries.sort((a, b) => {
            return a.entry.length > b.entry.length ? 1 : -1;
          });
          break;
        default:
          return state.entries;
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
  removeJournal,
} = journalSlice.actions;

export default journalSlice.reducer;
