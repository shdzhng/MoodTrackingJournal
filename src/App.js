import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { importEntries } from './features/journal/journalSlice';
import GlobalStyles from './Global.styles';
import JournalView from './views/JournalView';
import AnalyticView from './views/AnalyticsView';
import { Loader } from '@googlemaps/js-api-loader';
import { GoogleApiWrapper } from 'google-maps-react';

function App() {
  const LOCAL_STORAGE_KEY_ENTRIES = 'mooday.entries';
  const LOCAL_STORAGE_KEY_METADATA = 'mooday.metaData';
  const entries = useSelector((state) => state.journal.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedEntries = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_ENTRIES)
    );

    // console.log(storedMetaData);
    dispatch(importEntries(storedEntries));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_ENTRIES, JSON.stringify(entries));
  }, [entries]);

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
