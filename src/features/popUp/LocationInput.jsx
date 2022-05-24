import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LocationInput() {
  var autocomplete;
  function initialize() {
    autocomplete = new google.maps.places.Autocomplete(
      /** @type {HTMLInputElement} */
      (document.getElementById('autocomplete')),
      { types: ['geocode'] }
    );
    google.maps.event.addListener(
      autocomplete,
      'place_changed',
      function () {}
    );
  }

  return (
    <input
      id="autocomplete"
      name="location"
      placeholder="Enter your Saddress"
      onFocus="geolocate()"
      type="text"
    ></input>
  );
}

export default LocationInput;
