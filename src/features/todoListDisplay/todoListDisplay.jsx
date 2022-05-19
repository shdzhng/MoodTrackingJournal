import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoComplete } from '../todoListInput/todoListSlice';
import {
  ListContainer,
  TaskName,
  Priority,
  TaskContainer,
  TaskBubble,
} from './todoListDisplay.styles';
import SingleTodoCard from './SingleTodoCard';

function TodoListDisplay() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.tasks);

  const handleCheck = useCallback((e) => {
    const todoId = e.target.id;
    dispatch(toggleTodoComplete(todoId));
  });

  function TodoListCards() {
    return (
      <ListContainer>
        {todoList.map((task) => (
          <SingleTodoCard task={task} key={task.id} />
        ))}
      </ListContainer>
    );
  }

  return todoList.length ? TodoListCards() : null;
}

export default TodoListDisplay;
