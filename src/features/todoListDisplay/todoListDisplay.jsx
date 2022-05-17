import React from 'react';
import { useSelector } from 'react-redux';
import { UnorderedList, ListItem } from './todoListDisplay.styles';

function TodoListDisplay() {
  const todoList = useSelector((state) => state.todoList.tasks);

  return (
    <UnorderedList>
      {todoList.map((task, i) => (
        <ListItem key={i}>{task.name}</ListItem>
      ))}
    </UnorderedList>
  );
}

export default TodoListDisplay;
