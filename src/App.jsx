import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleApiWrapper } from 'google-maps-react';
import { AuthProvider } from './firebase/AuthContext';
import GlobalStyles from './constants/global.styles';
import JournalView from './scenes/JournalView';
import AnalyticView from './scenes/AnalyticsView';
import QualitativeView from './scenes/WordCloudView';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<JournalView />}></Route>
          <Route path="/analytics" element={<AnalyticView />}></Route>
          <Route path="/wordclouds" element={<QualitativeView />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default GoogleApiWrapper({
  apiKey,
})(App);
