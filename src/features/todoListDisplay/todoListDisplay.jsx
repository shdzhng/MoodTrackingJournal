import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoComplete } from '../todoListInput/todoListSlice';
import {
  Table,
  TableData,
  TableRow,
  TableHead,
  TableBody,
} from './todoListDisplay.styles';

function TodoListDisplay() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.tasks);

  const handleCheck = useCallback((e) => {
    const todoId = e.target.id;
    dispatch(toggleTodoComplete(todoId));
  });

  const ReadOnlyRow = (task, i, toggleEditMode) => {
    return (
      <TableRow key={i}>
        <TableData>
          <input
            id={task.id}
            onChange={(e) => {
              handleCheck(e);
            }}
            type="checkbox"
            checked={task.completed ? true : false}
          ></input>
        </TableData>
        <TableData>{task.name}</TableData>
        <TableData>{task.priority}</TableData>
        <TableData>
          <button
            onClick={() => {
              toggleEditMode();
            }}
          >
            Edit
          </button>
        </TableData>
      </TableRow>
    );
  };

  function TodoRow(task, i) {
    let editMode = false;
    const toggleEditMode = () => {
      editMode = !editMode;
      console.log(editMode);
    };

    return ReadOnlyRow(task, i, { toggleEditMode });
  }

  function GenerateTable() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableData></TableData>
            <TableData>Task</TableData>
            <TableData>Priority</TableData>
          </TableRow>
        </TableHead>
        <TableBody>{todoList.map((task, i) => TodoRow(task, i))}</TableBody>
      </Table>
    );
  }

  return todoList.length ? GenerateTable() : null;
}

export default TodoListDisplay;
