import React, { useState } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import {
  InfoWindowText,
  InfoWindowDate,
  InfoWindowTitle,
} from './MapMarker.styles';
import EditPopUp from '../../journal/EditPopUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButtonStyled, ButtonContainer } from '../../journal/Journal.style';
import { useDispatch } from 'react-redux';

export default function MapJournalEntryMarker({ entry, handleMarkerRemove }) {
  const dispatch = useDispatch();
  const [feeling, setFeeling] = useState('');

  const [showInfoWindow, setShowInfoWindow] = useState(true);
  const svgMarker = {
    path: 'M44.5,15c0-8.271-6.729-15-15-15s-15,6.729-15,15c0,7.934,6.195,14.431,14,14.949V58c0,0.553,0.448,1,1,1s1-0.447,1-1V29.949C38.305,29.431,44.5,22.934,44.5,15z M24.5,15c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S26.706,15,24.5,15z',
    fillColor: 'white',
    fillOpacity: 1,
    strokeWeight: 1,
    rotation: 0,
    scale: 0.5,
    anchor: new window.google.maps.Point(15, 30),
  };

  const { lat, lng } = JSON.parse(entry.location).geometry.location;

  const handleOpen = () => {
    setShowInfoWindow(true);
  };

  const handleClose = () => {
    setShowInfoWindow(false);
  };

  if (entry) {
    return (
      <Marker
        icon={svgMarker}
        onClick={handleOpen}
        position={{
          lat,
          lng,
        }}
      >
        {showInfoWindow && (
          <InfoWindow
            position={{
              lat: lat,
              lng: lng,
            }}
            onCloseClick={handleClose}
          >
            <div>
              <ButtonContainer>
                <EditPopUp
                  entry={entry}
                  handleMarkerRemove={handleMarkerRemove}
                ></EditPopUp>
                <IconButtonStyled
                  aria-label="delete"
                  size="small"
                  onClick={handleMarkerRemove}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButtonStyled>
              </ButtonContainer>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}
