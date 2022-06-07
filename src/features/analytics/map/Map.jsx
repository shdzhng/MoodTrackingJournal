import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import mapStyles from './Map.styles';
import MapMarker from './MapMarker';
import { GoogleMap } from '@react-google-maps/api';
import colors from '../../../constants/colors';
import MapJournalEntryMarker from '../../popUp/MapJournalEntryMarker';
import moment from 'moment';

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

const MapComponent = ({ selectedYear }) => {
  const entries = useSelector(({ journal }) => journal.entries);
  const [selectedLocation, setSelectedLocation] = useState(false);
  const [newMarker, setNewMarker] = useState({});
  const [newEntry, setNewEntry] = useState({});

  const startLocation = useMemo(() => {
    if (entries.length !== 0)
      return JSON.parse(entries[entries.length - 1].location).geometry.location;
    return { lat: 37.776596, lng: -122.391953 };
  }, [entries]);

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
          />
        )}
        {entries.map((entry, i) => {
          const yearOfEntry = moment.unix(entry.date).format('YYYY');
          if (yearOfEntry === selectedYear) {
            return <MapMarker entry={entry} key={i} />;
          }
        })}
      </GoogleMap>
    </>
  );
};

export default MapComponent;
