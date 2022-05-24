import React from 'react';
import mapStyles from './mapStyles';
import { useSelector } from 'react-redux';
import { GoogleMap, Marker } from '@react-google-maps/api';

export default function Map() {
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
  };

  const entries = useSelector(({ journal }) => journal.entries);

  const geocoder = new window.google.maps.Geocoder();

  const getGeocode = async () => {
    const location = await geocoder.geocode({ address: entries[0].location });
    console.log(location);
  };

  const containerStyle = {
    width: '50vw',
    height: '50vh',
    margin: `2rem auto`,
  };

  const startLocation = {
    lat: 37.776596,
    lng: -122.391953,
  };

  return (
    <>
      <GoogleMap
        id="mapContainer"
        mapContainerStyle={containerStyle}
        center={startLocation}
        zoom={15}
        options={options}
      >
        {entries.map((entry, i) => {
          const { lat, lng } = JSON.parse(entry.location).geometry.location;
          return (
            <Marker
              key={i}
              position={{
                lat,
                lng,
              }}
            />
          );
        })}
      </GoogleMap>
    </>
  );
}
