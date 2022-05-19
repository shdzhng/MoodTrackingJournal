import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoComplete } from '../todoListInput/todoListSlice';
import { MasonryContainer } from './Entries.style';
import SingleTodoCard from './SingleEntry';
import Masonry from '@mui/lab/Masonry';

function TodoListDisplay() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.tasks);

  function TodoListCards() {
    return (
      <MasonryContainer>
        <Masonry columns={3} spacing={3} sx={{ p: 0 }}>
          {todoList.map((task) => (
            <SingleTodoCard task={task} key={task.id} />
          ))}
        </Masonry>
      </MasonryContainer>
    );
  }

  return todoList.length ? TodoListCards() : null;
}

export default TodoListDisplay;
