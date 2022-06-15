import React, { useMemo, useState, useEffect } from 'react';
import moment from 'moment';
import NavigationBar from '../../components/NavBar/NavBar';
import GoogleMap from '../../components/Analytics/Map';
import BarChart from '../../components/Analytics/BarChart';
import LineChart from '../../components/Analytics/LineChart';
import QuickInfo from '../../components/Analytics/QuickInfo';
import { Card, CardContent, Grid, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  barGraphDataTemplate,
  lineGraphDataTemplate,
} from '../../constants/months';
import colors from '../../constants/colors';
import { months } from '../../constants/months';

function AnalyticView() {
  const entries = useSelector(({ journal }) => journal.entries);
  const [w, setW] = useState(window.innerWidth);
  const [selectedYear, setSelectedYear] = useState(moment().format('YYYY'));

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const currentMonth = moment().format('M');

  const filteredData = useMemo(() => {
    const returnedData = [];

    entries.forEach((entry) => {
      const yearOfEntry = moment.unix(entry.date).format('YYYY');
      if (yearOfEntry === selectedYear) {
        returnedData.push(entry);
      }
    });

    return returnedData;
  }, [entries, selectedYear]);

  const unfilteredData = useMemo(() => {
    const formattedData = {};

    entries.forEach((entry) => {
      const entryMonth = moment.unix(entry.date).format('M');
      const entryYear = moment.unix(entry.date).format('YYYY');

      if (formattedData[entryYear] === undefined)
        formattedData[entryYear] = {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
          6: 0,
          7: 0,
          8: 0,
          9: 0,
          10: 0,
          11: 0,
          12: 0,
        };

      formattedData[entryYear][entryMonth]++;
    });

    return formattedData;
  }, [entries]);

  const entriesYearList = useMemo(() => {
    const returnedList = [];
    entries.forEach((entry) => {
      const entryYear = moment.unix(entry.date).format('YYYY');
      if (!returnedList.includes(entryYear)) {
        returnedList.push(entryYear);
      }
    });

    return returnedList;
  }, [entries]);

  const stackedBarGraphData = useMemo(() => {
    const formattedData = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    };

    filteredData.forEach((entry) => {
      const entryMonth = moment.unix(entry.date).format('M');
      formattedData[entryMonth]++;
    });

    const returnedDataSet = months.map((month, i) => {
      return {
        label: month,
        data: [formattedData[i + 1]],
        backgroundColor: colors.variantMap[month],
        borderWidth: 0,
      };
    });

    return returnedDataSet;
  }, [filteredData]);

  const quickInfoMessageData = useMemo(() => {
    const currentMonth = moment().format('M');
    const lastMonth = currentMonth - 1;
    let monthlyDifference = undefined;
    const countedData = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    };

    filteredData.forEach((entry) => {
      const monthOfEntry = moment.unix(entry.date).format('M');
      countedData[monthOfEntry]++;
    });

    if (countedData && countedData[lastMonth] !== (undefined || 0)) {
      monthlyDifference = Math.round(
        (countedData[currentMonth] / countedData[lastMonth]) * 100
      );
    }

    return monthlyDifference;
  }, [filteredData]);

  const lineGraphData = useMemo(() => {
    const calculatedData = new lineGraphDataTemplate();
    const returnedDataSet = [];

    filteredData.forEach((entry) => {
      const monthOfEntry = moment.unix(entry.date).format('MMMM');
      const feeling = entry.feeling;
      const entryLength = entry.entry.split(/\b\S+\b/g).length - 1;
      calculatedData[feeling].wordCount[monthOfEntry] += entryLength;
    });

    for (const feeling in calculatedData) {
      returnedDataSet.push({
        label: `${feeling.slice(0, 1).toUpperCase()}${feeling
          .slice(1, feeling.length)
          .toLowerCase()}`,
        data: Object.values(calculatedData[feeling].wordCount),
        backgroundColor: colors.variantMap[feeling],
      });
    }
    return returnedDataSet;
  }, [filteredData]);

  const barGraphData = useMemo(() => {
    const calculatedData = new barGraphDataTemplate();
    const returnedDataSet = [];

    filteredData.forEach((entry) => {
      const monthOfEntry = moment.unix(entry.date).format('MMMM');
      const feeling = entry.feeling;

      calculatedData[feeling].entryCount[monthOfEntry]++;
    });

    for (const feeling in calculatedData) {
      returnedDataSet.push({
        label: `${feeling.slice(0, 1).toUpperCase()}${feeling
          .slice(1, feeling.length)
          .toLowerCase()}`,
        data: Object.values(calculatedData[feeling].entryCount),
        backgroundColor: colors.variantMap[feeling],
      });
    }

    return returnedDataSet;
  }, [filteredData]);

  const isEntriesEmpty = Object.keys(entries).length < 1 ? true : false;

  if (w > 500) {
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
                    entriesYearList={entriesYearList}
                    setSelectedYear={setSelectedYear}
                    unfilteredData={unfilteredData}
                    w={w}
                    stackedBarGraphData={stackedBarGraphData}
                    quickInfoMessageData={quickInfoMessageData}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={8}>
              <Card sx={{ height: 300 }}>
                <CardContent sx={{ height: 275 }}>
                  <LineChart
                    lineGraphData={lineGraphData}
                    isEntriesEmpty={isEntriesEmpty}
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
                    selectedYear={selectedYear}
                    currentMonth={currentMonth}
                    barGraphData={barGraphData}
                    isEntriesEmpty={isEntriesEmpty}
                  />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={7}>
              <GoogleMap selectedYear={selectedYear} />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }

  return (
    <>
      <NavigationBar />
      <Box sx={{ flexGrow: 1, mx: '3rem', my: '1rem' }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Card sx={{ height: 300 }}>
              <CardContent sx={{ height: 250 }}>
                <QuickInfo
                  entriesYearList={entriesYearList}
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear}
                  unfilteredData={unfilteredData}
                  stackedBarGraphData={stackedBarGraphData}
                  quickInfoMessageData={quickInfoMessageData}
                  w={w}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ height: 300 }}>
              <CardContent sx={{ height: 275 }}>
                <LineChart
                  lineGraphData={lineGraphData}
                  isEntriesEmpty={isEntriesEmpty}
                  selectedYear={selectedYear}
                  currentMonth={currentMonth}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ height: 430 }}>
              <CardContent sx={{ height: 400 }}>
                <BarChart
                  barGraphData={barGraphData}
                  isEntriesEmpty={isEntriesEmpty}
                  selectedYear={selectedYear}
                  currentMonth={currentMonth}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <GoogleMap selectedYear={selectedYear} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AnalyticView;
