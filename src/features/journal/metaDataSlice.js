import { createSlice, current } from '@reduxjs/toolkit';
import moment from 'moment';
import { monthlyCounterObj } from '../../constants/months';

const initialState = {};

export const metaDataSlice = createSlice({
  name: 'metaData',
  initialState,
  reducers: {
    incrementMetaData: (state, { payload }) => {
      const entryFeeling = payload.feeling;
      const entryMonth = moment.unix(payload.date).format('MMMM');
      const entryYear = moment.unix(payload.date).format('YYYY');

      if (!state[entryYear]) {
        state[entryYear] = monthlyCounterObj;
      }

      const newCount = state[entryYear][entryFeeling][entryMonth] + 1;

      state = Object.assign(state, newCount);
    },
  },
});

export const { incrementMetaData } = metaDataSlice.actions;
export default metaDataSlice.reducer;
