import React from 'react';
import NavigationBar from '../features/navBar/NavBar';
import GoogleMap from '../features/analytics/map/Map';
import { Map, TileLayer, Marker, Popup } from 'leaflet';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BarChart from '../features/analytics/BarChart';

function AnalyticView() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <NavigationBar />

      <Box sx={{ flexGrow: 1, mx: '3rem', my: '2rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <BarChart />
          </Grid>
          <Grid item xs={4}>
            <Item>PLACEHOLDER</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>PLACEHOLDER</Item>
          </Grid>
          <Grid item xs={12}>
            <GoogleMap />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AnalyticView;
