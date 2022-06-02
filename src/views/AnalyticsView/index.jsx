import React, { useMemo, useState } from 'react';
import NavigationBar from '../../features/navBar/NavBar';
import GoogleMap from '../../features/analytics/map/Map';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BarChart from '../../features/analytics/BarChart';
import LineChart from '../../features/analytics/LineChart';
import QuickInfo from '../../features/analytics/QuickInfo';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { monthlyCounterObj } from '../../constants/months';

function AnalyticView() {
  const entries = useSelector(({ journal }) => journal.entries);
  const [selectedYear, setSelectedYear] = useState(moment().format('YYYY'));
  const currentMonth = moment().format('M');

  const records = useMemo(() => {
    const returnedRecords = {};

    entries.forEach((entry) => {
      const monthOfEntry = moment.unix(entry.date).format('MMMM');
      const yearOfEntry = moment.unix(entry.date).format('YYYY');
      const feeling = entry.feeling;

      if (!returnedRecords[yearOfEntry]) {
        returnedRecords[yearOfEntry] = monthlyCounterObj;
      }

      returnedRecords[yearOfEntry][feeling][monthOfEntry]++;
    });

    return returnedRecords;
  }, [entries]);

  return (
    <>
      <NavigationBar />
      <Box sx={{ flexGrow: 1, mx: '3rem', my: '1rem' }}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card sx={{ height: 300 }}>
              <CardContent sx={{ height: 250 }}>
                <QuickInfo
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear}
                  records={records}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={8}>
            <Card sx={{ height: 300 }}>
              <CardContent sx={{ height: 275 }}>
                <LineChart
                  records={records}
                  selectedYear={selectedYear}
                  currentMonth={currentMonth}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={5}>
            <Card sx={{ height: 430 }}>
              <CardContent sx={{ height: 400 }}>
                <BarChart
                  records={records}
                  selectedYear={selectedYear}
                  currentMonth={currentMonth}
                />
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
