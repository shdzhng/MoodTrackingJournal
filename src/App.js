import React, { useCallback } from 'react';
import { TodoListInput } from './features/todoListInput/todoListInput';
import GlobalStyles from './Global.styles';
import TodoListDisplay from './features/todoListDisplay/todoListDisplay';

function App() {
  return (
    <>
      <GlobalStyles />
      <TodoListInput />
      <TodoListDisplay />
    </>
  );
}

export default App;
