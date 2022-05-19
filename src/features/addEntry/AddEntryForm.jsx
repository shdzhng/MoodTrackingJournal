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
} from './EntryForm.styles';
import { addEntry } from '../journal/journalSlice';
import { v4 as uuidv4 } from 'uuid';

export default function EntryForm() {
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
    const newEntry = {
      id: uuidv4(),
      entry,
      name,
      feeling,
    };
    dispatch(addEntry(newEntry));
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
