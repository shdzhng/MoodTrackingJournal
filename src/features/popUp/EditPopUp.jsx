import React, { useRef, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import {
  SubmitEntryButton,
  InputContainer,
  CenterButton,
  EntryTitleInput,
  EntryInput,
  EntryWindow,
} from './PopUp.styles';
import { IconButtonStyled } from '../journal/Journal.style';
import { updateEntry } from '../journal/journalSlice';
import EditIcon from '@mui/icons-material/Edit';
import colors from '../../constants/Colors';

export default function EditPopUp({ entry }) {
  const dispatch = useDispatch();
  const entryContent = useRef('');
  const todoNameRef = useRef('');
  const [open, setOpen] = React.useState(false);
  const [newEntry, setNewEntry] = React.useState(entry.entry);
  const [newName, setNewName] = React.useState(entry.name);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      location: entry.location,
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
        <EntryWindow
          style={{
            backgroundColor: `${colors.accent}`,
            border: 'none',
          }}
        >
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
