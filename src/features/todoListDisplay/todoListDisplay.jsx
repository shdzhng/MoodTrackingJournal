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
        {todoList.map((task, i) => (
          <TableRow key={i}>
            <TableData>
              <input
                id={task.id}
                onClick={(e) => {
                  handleCheck(e);
                }}
                type="checkbox"
              ></input>
            </TableData>
            <TableData>{task.name}</TableData>
            <TableData>{task.priority}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TodoListDisplay;
