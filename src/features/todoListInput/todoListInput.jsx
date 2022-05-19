import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FeelingButton,
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

  const feelingList = [
    { key: 'sad', label: 'Sad', variant: 'sad' },
    { key: 'medium', label: 'Medium', variant: 'medium' },
    { key: 'happy', label: 'Happy', variant: 'happy' },
  ];

  const renderFeelingButtons = ({ key, label, variant }) => {
    return (
      <FeelingButton
        selected={priority === key}
        key={key}
        variant={variant}
        onClick={(e) => {
          handlePriorityChange(e);
        }}
      >
        {label}
      </FeelingButton>
    );
  };

  return (
    <InputContainer>
      <TaskNameInput ref={todoNameRef} type="text" />
      <TaskDescriptionInput ref={todoDescription} type="textarea" />
      <PriorityButtonContainer>
        {feelingList.map((item) => {
          return renderFeelingButtons(item);
        })}
      </PriorityButtonContainer>
      <FormButtonContainer>
        <FormButton
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Add To Journal
        </FormButton>
        {/* <FormButton
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
        </FormButton> */}
      </FormButtonContainer>
    </InputContainer>
  );
}
