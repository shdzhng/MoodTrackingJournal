import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { importEntries } from './app/journalSlice';
import GlobalStyles from './constants/global.styles';
import JournalView from './scenes/JournalView';
import AnalyticView from './scenes/AnalyticsView';
import { GoogleApiWrapper } from 'google-maps-react';
import QualitativeView from './scenes/WordCloudView';
import seed from './seed';
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// set useSeed as false THEN click on 'DELETE JOURNAL' under app settings to wipe seed.

let useSeed = true;

function App() {
  const LOCAL_STORAGE_KEY_ENTRIES = 'mooday.entries';
  const entries = useSelector((state) => state.journal.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    if (useSeed === true) {
      localStorage.setItem(LOCAL_STORAGE_KEY_ENTRIES, JSON.stringify(seed));
    }
  }, []);

  useEffect(() => {
    const storedEntries = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_ENTRIES)
    );

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
        <Route path="/wordclouds" element={<QualitativeView />}></Route>
      </Routes>
    </Router>
  );
}

export default GoogleApiWrapper({
  apiKey,
})(App);
