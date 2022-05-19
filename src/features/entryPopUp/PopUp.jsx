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
import { addEntry } from '../journal/journalSlice';
import { v4 as uuidv4 } from 'uuid';
import ButtonGroup from '@mui/material/ButtonGroup';

const feelingList = [
  { key: 'loved', label: 'Loved', variant: 'loved' },
  { key: 'happy', label: 'Happy', variant: 'happy' },
  { key: 'calm', label: 'Calm', variant: 'calm' },
  { key: 'anxious', label: 'Anxious', variant: 'anxious' },
  { key: 'sad', label: 'Sad', variant: 'sad' },
  { key: 'angry', label: 'Angry', variant: 'angry' },
];

const feelingKey = {
  loved: 6,
  happy: 5,
  calm: 4,
  anxious: 3,
  sad: 2,
  angry: 1,
};

export default function EntryPopUp() {
  const dispatch = useDispatch();
  const entryContent = useRef('');
  const todoNameRef = useRef('');

  const [feeling, setFeeling] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const name = todoNameRef.current.value;
    const entry = entryContent.current.value;
    const date = new Date().toLocaleString();
    entryContent.current.value = '';
    todoNameRef.current.value = '';
    const newEntry = {
      id: uuidv4(),
      entry,
      name,
      feeling,
      date,
      feelingKey: feelingKey[feeling],
    };
    dispatch(addEntry(newEntry));
  });

  const handlefeelingChange = useCallback((e) => {
    const selectedFeeling = e.target.innerText.toLowerCase();
    setFeeling(selectedFeeling);
  });

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
    <div>
      <PopUpButtonContainer>
        <PopUpButton onClick={handleOpen}>New Entry</PopUpButton>
      </PopUpButtonContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EntryWindow>
          <InputContainer>
            <EntryTitleInput
              ref={todoNameRef}
              type="text"
              placeholder="Entry Title"
            />
            <EntryInput
              ref={entryContent}
              type="textarea"
              placeholder="A Journal of a Thousand Entries Begins with a Single Word"
            />

            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{ my: 2 }}
            >
              {feelingList.map((item) => {
                return renderFeelingButtons(item);
              })}
            </ButtonGroup>
            <CenterButton>
              <SubmitEntryButton
                variant="contained"
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                  handleClose();
                }}
              >
                Add To Journal
              </SubmitEntryButton>
            </CenterButton>
          </InputContainer>
        </EntryWindow>
      </Modal>
    </div>
  );
}
