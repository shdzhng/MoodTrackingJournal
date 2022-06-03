import React, { useState, useEffect, useRef, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import {
  FeelingButton,
  SubmitEntryButton,
  InputContainer,
  CenterButton,
  EntryTitleInput,
  PopUpButton,
  AddressContainer,
  PopUpButtonContainer,
  EntryInput,
  EntryWindow,
} from './PopUp.styles';
import { addEntry } from '../journal/journalSlice';
import { v4 as uuidv4 } from 'uuid';
import { ButtonGroup, IconButton } from '@mui/material';
import { feelingList } from '../../constants/feelings';
import { Autocomplete } from '@react-google-maps/api';

export default function EntryPopUp() {
  const dispatch = useDispatch();
  const entryContentRef = useRef('');
  const entryTitleRef = useRef('');
  const locationRef = useRef('');
  const [feeling, setFeeling] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [open, setOpen] = React.useState(false);
  const [inputRendered, setInputRendered] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const locationInput = document.getElementById('locationInput');

  useEffect(() => {
    const options = {
      componentRestrictions: { country: 'us' },
      fields: ['address_components', 'geometry', 'icon', 'name'],
    };

    const autocomplete = new window.google.maps.places.Autocomplete(
      locationInput,
      options
    );
  }, [inputRendered]);

  const handleGetCurrentLocation = (e) => {
    e.preventDefault();
    locationInput.value = '';
    navigator.geolocation.getCurrentPosition((position) => {
      const KEY = 'AIzaSyAKdW7KHxurf0MqG2goZ9d1Z01Sefs6Uck';
      const LAT = position.coords.latitude;
      const LNG = position.coords.longitude;
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${KEY}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          locationInput.value = data.results[0].formatted_address;
        });
    });
  };

  const geocoder = new window.google.maps.Geocoder();
  const getGeocode = async (address) => {
    return await geocoder.geocode({ address });
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const geoLocationInfo = await getGeocode(locationRef.current.value);
    const date = moment().unix();

    const newEntry = {
      id: uuidv4(),
      entry: content,
      name: title,
      feeling,
      date,
      location: JSON.stringify(geoLocationInfo.results[0]),
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

      <Modal className="modal" open={open} onClose={handleClose}>
        <EntryWindow className="modal">
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
            <AddressContainer>
              <input
                id="locationInput"
                ref={locationRef}
                onFocus={() => {
                  setInputRendered(true);
                }}
                placeholder="Enter a Location"
              ></input>
              <IconButton
                aria-label="use my location"
                onClick={(e) => {
                  handleGetCurrentLocation(e);
                }}
              >
                <GpsFixedIcon />
              </IconButton>
            </AddressContainer>
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
