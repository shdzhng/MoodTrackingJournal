import React from 'react';
import App from './App';
import GlobalStyles from './constants/Global.styles';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
