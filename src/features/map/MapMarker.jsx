import React from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import colors from '../../constants/Colors';
import {
  InfoWindowText,
  InfoWindowDate,
  InfoWindowTitle,
} from './MapMarker.styles';
import EditPopUp from '../popUp/EditPopUp';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButtonStyled, ButtonContainer } from '../journal/Journal.style';
import { useDispatch } from 'react-redux';
import { removeEntry } from '../journal/journalSlice';

export default function MapMarker({ entry }) {
  const dispatch = useDispatch();
  const svgMarker = {
    path: 'M44.5,15c0-8.271-6.729-15-15-15s-15,6.729-15,15c0,7.934,6.195,14.431,14,14.949V58c0,0.553,0.448,1,1,1s1-0.447,1-1V29.949C38.305,29.431,44.5,22.934,44.5,15z M24.5,15c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S26.706,15,24.5,15z',
    fillColor: colors.variantMap[entry.feeling],
    fillOpacity: 1,
    strokeWeight: 1,
    rotation: 0,
    scale: 0.5,
    anchor: new window.google.maps.Point(15, 30),
  };

  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const { lat, lng } = JSON.parse(entry.location).geometry.location;

  const handleOpen = () => {
    setShowInfoWindow(true);
  };

  const handleClose = () => {
    setShowInfoWindow(false);
  };

  const handleRemove = (entry) => {
    dispatch(removeEntry(entry));
  };

  if (entry) {
    return (
      <Marker
        name={entry.feeling}
        icon={svgMarker}
        title={entry.name}
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
              <InfoWindowTitle>{entry.name}</InfoWindowTitle>
              <InfoWindowDate>{entry.date.split(',')[0]}</InfoWindowDate>
              <InfoWindowText>{entry.entry}</InfoWindowText>
              <ButtonContainer>
                <EditPopUp entry={entry}></EditPopUp>
                <IconButtonStyled
                  aria-label="delete"
                  onClick={() => {
                    handleRemove(entry);
                  }}
                  size="small"
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
              <EditPopUp entry={entry}></EditPopUp>
              <IconButtonStyled
                aria-label="delete"
                onClick={() => {
                  handleRemove(entry);
                }}
                size="small"
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
