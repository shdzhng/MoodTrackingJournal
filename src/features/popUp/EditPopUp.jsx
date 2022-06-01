import React, { useRef, useEffect, useCallback, useState } from 'react';
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
import { updateEntry, addEntry, removeEntry } from '../journal/journalSlice';
import EditIcon from '@mui/icons-material/Edit';
import colors from '../../constants/colors';
import FeelingButtons from './FeelingButtons';
import moment from 'moment';

export default function EditPopUp({ entry, handleMarkerRemove }) {
  const dispatch = useDispatch();
  const entryContentRef = useRef('');
  const entryTitleRef = useRef('');

  const [open, setOpen] = React.useState(false);
  const [newEntry, setNewEntry] = React.useState(entry.entry);
  const [newName, setNewName] = React.useState(entry.name);
  const [feeling, setFeeling] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFeelingChange = (e) => {
    const selectedFeeling = e.target.innerText.toLowerCase();
    setFeeling(selectedFeeling);
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const newEntry = {
      id: entry.id,
      entry: entryContentRef.current.value,
      name: entryTitleRef.current.value,
      feeling: feeling,
      date: moment().unix(),
      location: entry.location,
    };

    dispatch(updateEntry(newEntry));

    if (handleMarkerRemove !== undefined) handleMarkerRemove();
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
              ref={entryTitleRef}
              onChange={handleNameChange}
              type="text"
              value={newName}
            />
            <EntryInput
              ref={entryContentRef}
              type="textarea"
              value={newEntry}
              onChange={(e) => {
                handleEntryChange(e);
              }}
            />
            <FeelingButtons
              feeling={feeling}
              handleFeelingChange={handleFeelingChange}
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
