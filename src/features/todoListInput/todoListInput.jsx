import React, { useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { PriorityButton, FormButton } from './todoListInput.styles';
import { addTask, clearAllCompleted, clearTodoList } from './todoListSlice';
import { v4 as uuidv4 } from 'uuid';
import {} from './todoListSlice';

export function TodoListInput() {
  const dispatch = useDispatch();
  const todoNameRef = useRef('');
  const [priority, setPriority] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const name = todoNameRef.current.value;
    todoNameRef.current.value = '';
    const newTask = {
      id: uuidv4(),
      name,
      completed: false,
      priority,
    };
    dispatch(addTask(newTask));
  });

  const handleClearAllCompleted = useCallback((e) => {
    dispatch(clearAllCompleted());
  });

  const handleClearTodoList = useCallback((e) => {
    dispatch(clearTodoList());
  });

  const handlePriorityChange = useCallback((e) => {
    const selectedPriortity = e.target.innerText.toLowerCase();
    setPriority(selectedPriortity);
  });

  const priorityList = [
    { key: 'low', label: 'Low', variant: 'low' },
    { key: 'medium', label: 'Medium', variant: 'medium' },
    { key: 'high', label: 'High', variant: 'high' },
  ];

  const renderButton = ({ key, label, variant }) => {
    return (
      <PriorityButton
        selected={priority === key}
        key={key}
        variant={variant}
        onClick={(e) => {
          handlePriorityChange(e);
        }}
      >
        {label}
      </PriorityButton>
    );
  };

  return (
    <div id="inputContainer">
      <input ref={todoNameRef} type="text" />

      {priorityList.map((item) => {
        return renderButton(item);
      })}

      <FormButton
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Add Task
      </FormButton>
      <FormButton
        onClick={() => {
          handleClearAllCompleted();
        }}
      >
        Clear Completed Tasks
      </FormButton>
      <FormButton
        onClick={() => {
          handleClearTodoList();
        }}
      >
        Clear All Tasks
      </FormButton>
    </div>
  );
}
