import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import LocationInput from './LocationInput';
import TextField from '@mui/material/TextField';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { Autocomplete } from '@mui/material';
import { Box } from '@mui/material';

const feelingList = [
  { key: 'loved', label: 'Loved', variant: 'loved' },
  { key: 'happy', label: 'Happy', variant: 'happy' },
  { key: 'calm', label: 'Calm', variant: 'calm' },
  { key: 'anxious', label: 'Anxious', variant: 'anxious' },
  { key: 'sad', label: 'Sad', variant: 'sad' },
  { key: 'angry', label: 'Angry', variant: 'angry' },
];

export default function EntryPopUp() {
  const dispatch = useDispatch();
  const entryContentRef = useRef('');
  const entryTitleRef = useRef('');
  const entryLocationRef = useRef('');
  const provider = new OpenStreetMapProvider();

  const [feeling, setFeeling] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [open, setOpen] = React.useState(false);
  const [geoSearchResult, setGeoSearchResult] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const date = new Date().toLocaleString();
    entryContentRef.current.value = '';
    entryTitleRef.current.value = '';

    const newEntry = {
      id: uuidv4(),
      entry: content,
      name: title,
      feeling,
      date,
      location: selectedLocation,
    };
    setTitle(null);
    setContent(null);
    dispatch(addEntry(newEntry));
  });

  const handleFeelingChange = useCallback((e) => {
    const selectedFeeling = e.target.innerText.toLowerCase();
    setFeeling(selectedFeeling);
  });

  const handleContentChange = useCallback(({ target }) => {
    setContent(target.value);
  });

  const handleTitleChange = useCallback(({ target }) => {
    setTitle(target.value);
  });

  useEffect(() => {
    console.log(geoSearchResult);
  }, [geoSearchResult]);

  ///geo-searching
  const handleAddressInputChange = useCallback(async (e) => {
    e.preventDefault();
    const results = await provider.search({ query: e.target.value });
    await setGeoSearchResult(results);
  }, []);

  const handleAddressChange = useCallback((e) => {
    e.preventDefault();
    const newSelectedLocation = JSON.parse(e.target.getAttribute('value'));
    setSelectedLocation(newSelectedLocation);
    setGeoSearchResult([]);
  }, []);

  const disableButtonCheck = !feeling || !title || !content ? false : true;

  const renderFeelingButtons = ({ key, label, variant }) => {
    return (
      <FeelingButton
        selected={feeling === key}
        key={key}
        variant={variant}
        onClick={(e) => {
          handleFeelingChange(e);
        }}
      >
        {label}
      </FeelingButton>
    );
  };

  return (
    <div>
      <PopUpButtonContainer>
        <PopUpButton onClick={handleOpen}>Add New Entry</PopUpButton>
      </PopUpButtonContainer>

      <Modal open={open} onClose={handleClose}>
        <EntryWindow>
          <InputContainer>
            <EntryTitleInput
              ref={entryTitleRef}
              type="text"
              placeholder="Entry Title"
              onChange={handleTitleChange}
            />
            <EntryInput
              ref={entryContentRef}
              onChange={handleContentChange}
              type="textarea"
              placeholder="A Journal of a Thousand Entries Begins with a Single Word"
            />

            <Autocomplete
              disablePortal
              id="locationInput"
              sx={{ width: 300 }}
              freeSolo={true}
              options={geoSearchResult.filter((location, i) => {
                if (i < 4) return location;
              })}
              open={true}
              onInputChange={(e) => handleAddressInputChange(e)}
              onChange={handleAddressChange}
              renderInput={(params) => <TextField {...params} />}
              limitTags={3}
              noOptionsText="none"
              renderOption={(props, option) => {
                return (
                  <li {...props} value={JSON.stringify(option)} key={option.x}>
                    {option.label}
                  </li>
                );
              }}
            />

            <button
              onClick={() => {
                const locationInputElement =
                  document.getElementById('locationInput');
                navigator.geolocation.getCurrentPosition((position) => {
                  console.dir(locationInputElement);
                  locationInputElement.value = position.timestamp;
                });
              }}
            >
              hello
            </button>

            <ButtonGroup variant="contained" sx={{ my: 2 }}>
              {feelingList.map((item) => {
                return renderFeelingButtons(item);
              })}
            </ButtonGroup>
            <CenterButton>
              <SubmitEntryButton
                variant="contained"
                type="submit"
                disabled={!disableButtonCheck}
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
