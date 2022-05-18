import React, { useCallback } from 'react';
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

  function GenerateTableRow(task, i) {
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
          <button>Edit</button>
        </TableData>
      </TableRow>
    );
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
        <TableBody>
          {todoList.map((task, i) => GenerateTableRow(task, i))}
        </TableBody>
      </Table>
    );
  }

  return todoList.length ? GenerateTable() : null;
}

export default TodoListDisplay;
