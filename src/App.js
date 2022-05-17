import React, { useCallback } from 'react';
import GlobalStyles from './Global.styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
