import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleTodoComplete,
} from '../todoListInput/todoListSlice';
import { UnorderedList, ListItem, TodoItem } from './todoListDisplay.styles';

function TodoListDisplay() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.tasks);
  const handleCheck = useCallback((e) => {
    const todoId = e.target.id;
    dispatch(toggleTodoComplete(todoId));
  });

  return (
    <UnorderedList>
      {todoList.map((task, i) => (
        <TodoItem key={i}>
          <input
            id={task.id}
            onClick={(e) => {
              handleCheck(e);
            }}
            type="checkbox"
          ></input>
          <ListItem>{task.name}</ListItem>
        </TodoItem>
      ))}
    </UnorderedList>
  );
}

export default TodoListDisplay;
