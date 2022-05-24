import React from 'react';
import mapStyles from './mapStyles';
import { useSelector } from 'react-redux';
import MapMarker from './MapMarker';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const MapComponent = () => {
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
  };

  const entries = useSelector(({ journal }) => journal.entries);

  const containerStyle = {
    width: '50vw',
    height: '50vh',
    margin: `2rem auto`,
  };

  const startLocation = {
    lat: 37.776596,
    lng: -122.391953,
  };

  const svgMarker = {
    path: 'M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
    fillColor: 'blue',
    fillOpacity: 0.7,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new window.google.maps.Point(15, 30),
  };

  const renderMarker = (entry, i) => {
    const { lat, lng } = JSON.parse(entry.location).geometry.location;
    const handleOpen = () => {};
    const handleClose = () => {};

    return (
      <Marker
        key={i}
        name={entry.feeling}
        // label={entry.feeling[0].toUpperCase()}
        icon={svgMarker}
        title={entry.name}
        position={{
          lat,
          lng,
        }}
      >
        <InfoWindow
          position={{
            lat,
            lng,
          }}
        >
          <div>
            <p>{entry.entry}</p>
          </div>
        </InfoWindow>
      </Marker>
    );
  };

  return (
    <>
      <GoogleMap
        id="mapContainer"
        mapContainerStyle={containerStyle}
        center={startLocation}
        zoom={11}
        options={options}
      >
        {entries.map((entry, i) => (
          <MapMarker entry={entry} i />
        ))}
      </GoogleMap>
    </>
  );
};

export default MapComponent;
