import React from 'react';
import NavigationBar from '../features/navBar/NavBar';
import GoogleMap from '../features/map/Map';
import { Map, TileLayer, Marker, Popup } from 'leaflet';

function AnalyticView() {
  return (
    <div>
      <NavigationBar />
      <GoogleMap />
    </div>
  );
}

export default AnalyticView;
