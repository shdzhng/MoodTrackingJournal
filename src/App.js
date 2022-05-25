import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { importEntries } from './features/journal/journalSlice';
import GlobalStyles from './Global.styles';
import JournalView from './views/JournalView';
import AnalyticView from './views/AnalyticsView';
import { Loader } from '@googlemaps/js-api-loader';
import { GoogleApiWrapper } from 'google-maps-react';

const LOCAL_STORAGE_KEY = 'journal.entries';

// const loader = new Loader({
//   apiKey: 'AIzaSyAKdW7KHxurf0MqG2goZ9d1Z01Sefs6Uck',
//   version: 'weekly',
//   libraries: ['places'],
// }).load();

function App() {
  const todoList = useSelector((state) => state.journal.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    dispatch(importEntries(storedTodoList));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<JournalView />}></Route>
        <Route path="/analytics" element={<AnalyticView />}></Route>
      </Routes>
    </Router>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAKdW7KHxurf0MqG2goZ9d1Z01Sefs6Uck',
})(App);
