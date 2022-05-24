import React from 'react';
import mapStyles from './mapStyles';
import { useSelector } from 'react-redux';
import { GoogleMap } from '@react-google-maps/api';

export default function Map() {
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
  };

  const containerStyle = {
    width: '50vw',
    height: '50vh',
  };

  const startLocation = {
    lat: 37.776596,
    lng: -122.391953,
  };

  return (
    <GoogleMap
      id="mapContainer"
      mapContainerStyle={containerStyle}
      center={startLocation}
      zoom={15}
      options={options}
    ></GoogleMap>
  );
}
