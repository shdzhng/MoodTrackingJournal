import React from 'react';
import TodoListInput from '../features/todoListInput/todoListInput';
import TodoListDisplay from '../features/entriesDisplay/EntriesDisplay';


function Home() {
  return (
    <>
      <TodoListInput />
      <TodoListDisplay />
    </>
  );
}

export default Home;
