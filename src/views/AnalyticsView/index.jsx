import React from 'react';
import NavigationBar from '../../features/navBar/NavBar';
import GoogleMap from '../../features/analytics/map/Map';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BarChart from '../../features/analytics/BarChart';
import LineChart from '../../features/analytics/LineChart';
import QuickInfo from '../../features/analytics/QuickInfo';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { monthlyCounterObj } from '../../constants/months';
import Item from './styled';

function AnalyticView() {
  const entries = useSelector(({ journal }) => journal.entries);
  const selectedYear = '2022';

  const records = {};
  console.log(entries);
  const formatData = (entries) => {
    entries.forEach((entry) => {
      const yearOfEntry = moment.unix(entry.date).format('YYYY');
      if (!records[yearOfEntry]) records[yearOfEntry] = monthlyCounterObj;
      const feeling = entry.feeling;
      const monthOfEntry = moment.unix(entry.date).format('MMMM');
      records[yearOfEntry][feeling][monthOfEntry]++;
    });
  };

  formatData(entries);

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
                <LineChart records={records} selectedYear={selectedYear} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={5}>
            <Card sx={{ height: 430 }}>
              <CardContent sx={{ height: 400 }}>
                <BarChart records={records} selectedYear={selectedYear} />
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
