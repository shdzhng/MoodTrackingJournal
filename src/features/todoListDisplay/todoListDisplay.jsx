import React from 'react';
import { useSelector } from 'react-redux';

function TodoListDisplay() {
  const todoList = useSelector((state) => state.todoList.tasks);

  return (
    <ul>
      {todoList.map((task, i) => (
        <li key={i}>{task.name}</li>
      ))}
    </ul>
  );
}

export default TodoListDisplay;
