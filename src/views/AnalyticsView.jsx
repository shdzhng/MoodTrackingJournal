import React from 'react';
import NavigationBar from '../features/navBar/NavBar';
import LeafletMap from '../features/map/Map';
import { Map, TileLayer, Marker, Popup } from 'leaflet';

function AnalyticView() {
  return (
    <>
      <NavigationBar />
      <LeafletMap />
    </>
  );
}

export default AnalyticView;
