import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import mapStyles from './Map.styles';
import MapMarker from './MapMarker';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import colors from '../../../constants/Colors';
import MapJournalEntryMarker from '../../popUp/MapJournalEntryMarker';

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  clickableIcons: false,
  zoomControl: true,
};

const containerStyle = {
  width: '100%',
  height: '50vh',
  margin: '0 auto',
  border: `1px solid ${colors.blue2}`,
};

const startLocation = {
  lat: 37.776596,
  lng: -122.391953,
};

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(false);
  const [newMarker, setNewMarker] = useState({});
  const [newEntry, setNewEntry] = useState({});

  const entries = useSelector(({ journal }) => journal.entries);

  const geocoder = new window.google.maps.Geocoder();

  const getGeocode = async (latlng) => {
    return await geocoder.geocode({ location: latlng }).then((response) => {
      return response.results[0];
    });
  };

  const createNewEntry = async (latlng) => {
    const entry = {
      date: Date.now(),
      entry: '',
      feeling: '',
      id: uuidv4(),
      location: JSON.stringify(await getGeocode(latlng)),
      name: '',
    };
    setNewEntry(entry);
    setSelectedLocation(true);
  };

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    const latlng = {
      lat,
      lng,
    };
    setNewMarker(latlng);
    createNewEntry(latlng);
  };

  const handleMarkerRemove = () => {
    setNewMarker({});
    setNewEntry({});
    setSelectedLocation(false);
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
        {selectedLocation && (
          <MapJournalEntryMarker
            entry={newEntry}
            handleMarkerRemove={handleMarkerRemove}
          >
            {' '}
          </MapJournalEntryMarker>
        )}
        {entries.map((entry, i) => (
          <MapMarker entry={entry} key={i} />
        ))}
      </GoogleMap>
    </>
  );
};

export default MapComponent;
