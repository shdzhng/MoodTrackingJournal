import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  PriorityButton,
  FormButton,
  InputContainer,
  PriorityButtonContainer,
  FormButtonContainer,
  TaskNameInput,
  TaskDescriptionInput,
} from './todoListInput.styles';
import { addTask, clearAllCompleted, clearTodoList } from './todoListSlice';
import { v4 as uuidv4 } from 'uuid';

export default function TodoListInput() {
  const dispatch = useDispatch();
  const todoDescription = useRef('');
  const todoNameRef = useRef('');
  const [priority, setPriority] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const name = todoNameRef.current.value;
    const description = todoDescription.current.value;
    todoDescription.current.value = '';
    todoNameRef.current.value = '';
    const newTask = {
      id: uuidv4(),
      description,
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

  const renderPriorityButtons = ({ key, label, variant }) => {
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
    <InputContainer>
      <TaskNameInput ref={todoNameRef} type="text" />
      <TaskDescriptionInput ref={todoDescription} type="textarea" />
      <PriorityButtonContainer>
        {priorityList.map((item) => {
          return renderPriorityButtons(item);
        })}
      </PriorityButtonContainer>
      <FormButtonContainer>
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
      </FormButtonContainer>
    </InputContainer>
  );
}
