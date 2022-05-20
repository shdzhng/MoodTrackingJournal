import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'leaflet';
import L from 'leaflet';

const LeafletMap = (props) => {
  const container = document.getElementById('map');

  if (container) {
    let map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          'pk.eyJ1Ijoic2hkemhuZyIsImEiOiJjbDNmMGRvYWkwMjM1M2pucHZiMjc5MGFuIn0.Hpe_d8gzMiXhSbV9QE2YAw',
      }
    ).addTo(map);
  }

  return <div id="map"></div>;
};

export default LeafletMap;
