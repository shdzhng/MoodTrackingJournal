import React, { useCallback, useEffect, useState } from 'react';
import GlobalStyles from './Global.styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import { useSelector, useDispatch } from 'react-redux';
import { importTodoList } from './features/todoListInput/todoListSlice';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const todoList = useSelector(({ todoList }) => todoList.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    dispatch(importTodoList(storedTodoList));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
    console.log(todoList);
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
