import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { TextField } from '@mui/material';

export default function SearchBar() {
  const [geoSearchResult, setGeoSearchResult] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({});
  // useEffect(() => {
  //   console.log(geoSearchResult);
  // }, [geoSearchResult]);

  const handleAddressInputChange = useCallback(async (e) => {
    e.preventDefault();
    // const results = await provider.search({ query: e.target.value });
    // await setGeoSearchResult(results);
  }, []);

  const handleAddressChange = useCallback((e) => {
    e.preventDefault();
    const newSelectedLocation = JSON.parse(e.target.getAttribute('value'));
    setSelectedLocation(newSelectedLocation);
    setGeoSearchResult([]);
  }, []);

  const input = document.getElementById('input');
  const options = {
    componentRestrictions: { country: 'us' },
    fields: ['address_components', 'geometry', 'icon', 'name'],
  };
  const autocomplete = new window.google.maps.places.Autocomplete(
    input,
    options
  );

  const handleGetCurrentLocation = (e) => {
    e.preventDefault();
    const locationInputElement = document.getElementById('input');
    navigator.geolocation.getCurrentPosition((position) => {
      const KEY = 'AIzaSyAKdW7KHxurf0MqG2goZ9d1Z01Sefs6Uck';
      const LAT = position.coords.latitude;
      const LNG = position.coords.longitude;
      let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${KEY}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          locationInputElement.value = data.results[0].formatted_address;
        });
    });
  };

  return (
    <form action="">
      <input id="input"></input>
      <button
        onClick={(e) => {
          handleGetCurrentLocation(e);
        }}
      >
        Use My Location
      </button>
    </form>
  );
}
