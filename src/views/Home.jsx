import React from 'react';
import TodoListInput from '../features/todoListInput/todoListInput';
import TodoListDisplay from '../features/journal/Journal';


function Home() {
  return (
    <>
      <TodoListInput />
      <TodoListDisplay />
    </>
  );
}

export default Home;
