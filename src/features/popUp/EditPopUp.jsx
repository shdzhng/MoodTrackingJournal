import React, { useState, useRef, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import {
  FeelingButton,
  SubmitEntryButton,
  InputContainer,
  CenterButton,
  EntryTitleInput,
  PopUpButton,
  PopUpButtonContainer,
  EntryInput,
  EntryWindow,
} from './PopUp.styles';
import { IconButtonStyled } from '../journal/Journal.style';
import { updateEntry } from '../journal/journalSlice';
import { v4 as uuidv4 } from 'uuid';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/Edit';

const feelingList = [
  { key: 'loved', label: 'Loved', variant: 'loved' },
  { key: 'happy', label: 'Happy', variant: 'happy' },
  { key: 'calm', label: 'Calm', variant: 'calm' },
  { key: 'anxious', label: 'Anxious', variant: 'anxious' },
  { key: 'sad', label: 'Sad', variant: 'sad' },
  { key: 'angry', label: 'Angry', variant: 'angry' },
];

export default function EditPopUp({ entry }) {
  const dispatch = useDispatch();
  const entryContent = useRef('');
  const todoNameRef = useRef('');
  const [open, setOpen] = React.useState(false);
  const [newEntry, setNewEntry] = React.useState(entry.entry);
  const [newName, setNewName] = React.useState(entry.name);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const feeling = entry.feeling;

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const newName = todoNameRef.current.value;
    const newEntry = entryContent.current.value;
    const editDate = new Date().toLocaleString();
    entryContent.current.value = '';
    todoNameRef.current.value = '';
    const editedEntry = {
      id: entry.id,
      entry: newEntry,
      name: newName,
      feeling: entry.feeling,
      date: entry.date,
      editDate,
    };
    dispatch(updateEntry(editedEntry));
  });

  const handleEntryChange = useCallback(({ target }) => {
    setNewEntry(target.value);
  });

  const handleNameChange = useCallback(({ target }) => {
    setNewName(target.value);
  });

  return (
    <div>
      <IconButtonStyled aria-label="edit" onClick={handleOpen} size="small">
        <EditIcon fontSize="inherit" />
      </IconButtonStyled>

      <Modal open={open} onClose={handleClose}>
        <EntryWindow>
          <InputContainer>
            <EntryTitleInput
              ref={todoNameRef}
              onChange={handleNameChange}
              type="text"
              value={newName}
            />
            <EntryInput
              ref={entryContent}
              type="textarea"
              value={newEntry}
              onChange={(e) => {
                handleEntryChange(e);
              }}
            />
            <CenterButton>
              <SubmitEntryButton
                variant="contained"
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                  handleClose();
                }}
              >
                Save Edit
              </SubmitEntryButton>
            </CenterButton>
          </InputContainer>
        </EntryWindow>
      </Modal>
    </div>
  );
}
