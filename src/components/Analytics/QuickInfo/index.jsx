import React, { useState, useMemo, useEffect } from 'react';
import colors from '../../../constants/colors';
import moment from 'moment';
import { Item } from './styled';
import { useSelector } from 'react-redux';
import { MenuItem, FormControl, Select, Box, Grid } from '@mui/material';
import StackedBarGraph from './StackedBarGraph';
import { months } from '../../../constants/months';
import ComparisonMessage from './ComparisonMessage';

function QuickInfo({
  selectedYear,
  setSelectedYear,
  w,
  unfilteredData,
  quickInfoMessageData,
  stackedBarGraphData,
  entriesYearList,
}) {
  const currentTime = moment().format('h:mm a');
  const currentDay = moment().format('dddd, MMMM Do, YYYY');
  const [clockTime, setClockTime] = useState(currentTime);

  setInterval(() => {
    setClockTime(moment().format('h:mm a'));
  }, 1000);

  const handleYearChange = (e) => {
    const indexNum = e.target.value / 10;
    setSelectedYear(entriesYearList[indexNum]);
  };

  const valueOfSelectedYear = entriesYearList.indexOf(selectedYear) * 10;

  if (w > 1100 || w < 500) {
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Item>{currentDay}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{clockTime}</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <ComparisonMessage
                  quickInfoMessageData={quickInfoMessageData}
                  selectedYear={selectedYear}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl sx={{ autoWidth: true, fontSize: 1 }} size="small">
                  <Select
                    value={valueOfSelectedYear}
                    onChange={handleYearChange}
                    sx={{ fontSize: 14, color: colors.blue1 }}
                  >
                    {Object.keys(unfilteredData)
                      .sort()
                      .map((year, i) => (
                        <MenuItem key={i} value={i * 10}>
                          {year}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ height: 150 }}>
                <StackedBarGraph stackedBarGraphData={stackedBarGraphData} />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Item>
              <FormControl sx={{ autoWidth: true, fontSize: 1 }} size="small">
                <Select
                  value={valueOfSelectedYear}
                  sx={{ fontSize: 20, color: colors.blue1 }}
                  onChange={handleYearChange}
                >
                  {Object.keys(unfilteredData)
                    .sort()
                    .map((year, i) => (
                      <MenuItem key={i} value={i * 10}>
                        {year}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item sx={{ height: 'auto', mt: 2 }}>
              <StackedBarGraph stackedBarGraphData={stackedBarGraphData} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default QuickInfo;
