import React from 'react';
import TodoListInput from '../features/todoListInput/todoListInput';
import TodoListDisplay from '../features/todoListDisplay/todoListDisplay';


function Home() {
  return (
    <>
      <TodoListInput />
      <TodoListDisplay />
    </>
  );
}

export default Home;
