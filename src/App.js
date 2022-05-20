import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { importEntries } from './features/journal/journalSlice';
import GlobalStyles from './Global.styles';
import JournalView from './views/Journal';
import AnalyticView from './views/Analytics';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

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

export default App;
