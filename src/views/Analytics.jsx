import React from 'react';
import NavigationBar from '../features/navBar/NavBar';
import LocationInput from '../features/autocomplete/LocationInput';
import LeafletMap from '../features/map/Map';
import { Map, TileLayer, Marker, Popup } from 'leaflet';

function AnalyticView() {
  return (
    <>
      <NavigationBar />
      <LeafletMap />
      {/* <div id="map"></div> */}
      <LocationInput></LocationInput>
    </>
  );
}

export default AnalyticView;
