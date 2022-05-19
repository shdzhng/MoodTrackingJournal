import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  FeelingButton,
  SubmitEntryButton,
  JournalEntryContainer,
  FeelingButtonContainer,
  FormButtonContainer,
  EntryTitleInput,
  EntryInput,
} from './todoListInput.styles';
import { addTask } from './todoListSlice';
import { v4 as uuidv4 } from 'uuid';

export default function TodoListInput() {
  const dispatch = useDispatch();
  const entryContent = useRef('');
  const todoNameRef = useRef('');
  const [feeling, setFeeling] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const name = todoNameRef.current.value;
    const entry = entryContent.current.value;
    entryContent.current.value = '';
    todoNameRef.current.value = '';
    const newTask = {
      id: uuidv4(),
      entry,
      name,
      completed: false,
      feeling,
    };
    dispatch(addTask(newTask));
  });

  const handlefeelingChange = useCallback((e) => {
    const selectedFeeling = e.target.innerText.toLowerCase();
    setFeeling(selectedFeeling);
  });

  const feelingList = [
    { key: 'sad', label: 'Sad', variant: 'sad' },
    { key: 'medium', label: 'Medium', variant: 'medium' },
    { key: 'happy', label: 'Happy', variant: 'happy' },
  ];

  const renderFeelingButtons = ({ key, label, variant }) => {
    return (
      <FeelingButton
        selected={feeling === key}
        key={key}
        variant={variant}
        onClick={(e) => {
          handlefeelingChange(e);
        }}
      >
        {label}
      </FeelingButton>
    );
  };

  return (
    <JournalEntryContainer>
      <EntryTitleInput ref={todoNameRef} type="text" />
      <EntryInput ref={entryContent} type="textarea" />
      <FeelingButtonContainer>
        {feelingList.map((item) => {
          return renderFeelingButtons(item);
        })}
      </FeelingButtonContainer>
      <FormButtonContainer>
        <SubmitEntryButton
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Add To Journal
        </SubmitEntryButton>
      </FormButtonContainer>
    </JournalEntryContainer>
  );
}
