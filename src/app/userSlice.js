import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => {
      return {
        loggedIn: true,
      };
    },
    logOut: (state) => {
      return {
        loggedIn: false,
      };
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
