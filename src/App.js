import React, { useEffect } from 'react';
import GlobalStyles from './Global.styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import { useSelector, useDispatch } from 'react-redux';
import { importEntries } from './features/todoListInput/todoListSlice';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const todoList = useSelector(({ todoList }) => todoList.tasks);
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
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
