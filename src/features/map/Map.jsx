import React from 'react';
import mapStyles from './Map.styles';
import { useSelector } from 'react-redux';
import MapMarker from './MapMarker';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const MapComponent = () => {
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    clickableIcons: false,
    zoomControl: true,
  };

  const entries = useSelector(({ journal }) => journal.entries);

  const containerStyle = {
    width: '75vw',
    height: '75vh',
    margin: '2rem auto 0 auto',
  };

  const startLocation = {
    lat: 37.776596,
    lng: -122.391953,
  };

  const handleMapClick = (e) => {
    console.log(e);
  };

  return (
    <>
      <GoogleMap
        id="mapContainer"
        mapContainerStyle={containerStyle}
        center={startLocation}
        zoom={11}
        options={options}
        onClick={handleMapClick}
      >
        {entries.map((entry, i) => (
          <MapMarker entry={entry} key={i} />
        ))}
      </GoogleMap>
    </>
  );
};

export default MapComponent;
