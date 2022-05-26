import React from 'react';
import NavigationBar from '../features/navBar/NavBar';
import GoogleMap from '../features/analytics/map/Map';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BarChart from '../features/analytics/BarChart';
import LineChart from '../features/analytics/LineChart';
import QuickInfo from '../features/analytics/QuickInfo';
import colors from '../constants/Colors';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

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
      <Box sx={{ flexGrow: 1, mx: '3rem', my: '1rem' }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card sx={{ height: 300 }}>
              <CardContent sx={{ height: 250 }}>
                <QuickInfo />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={8}>
            <Card sx={{ height: 300 }}>
              <CardContent sx={{ height: 275 }}>
                <LineChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={5}>
            <Card sx={{ height: 430 }}>
              <CardContent sx={{ height: 400 }}>
                <BarChart />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={7}>
            <GoogleMap />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AnalyticView;
