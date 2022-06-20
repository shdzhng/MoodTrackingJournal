import React, { useState, useMemo, memo } from 'react';
import { Item } from './styled';
import { MenuItem, FormControl, Select, Box, Grid } from '@mui/material';
import colors from '../../../constants/colors';
import moment from 'moment';
import StackedBarGraph from './StackedBarGraph';
import ComparisonMessage from './ComparisonMessage';

function QuickInfo({
  selectedYear,
  setSelectedYear,
  w,
  quickInfoMessageData,
  stackedBarGraphData,
  entriesYearList,
  isEntriesEmpty,
}) {
  const currentTime = moment().format('h:mm a');
  const currentDay = moment().format('dddd, MMMM Do, YYYY');
  const [clockTime, setClockTime] = useState(currentTime);
  const valueOfSelectedYear = entriesYearList.indexOf(selectedYear) * 10;

  setInterval(() => {
    setClockTime(moment().format('h:mm a'));
  }, 1000);

  const graphOrientation = useMemo(() => {
    if (w > 750) return 'y';
    if (w < 500) return 'y';
    return 'x';
  }, [w]);

  const handleYearChange = (e) => {
    const indexNum = e.target.value / 10;
    setSelectedYear(entriesYearList[indexNum]);
  };

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
              <Item sx={{ height: 40 }}>
                <ComparisonMessage
                  quickInfoMessageData={quickInfoMessageData}
                  selectedYear={selectedYear}
                  isEntriesEmpty={isEntriesEmpty}
                />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item sx={{ minHeight: 40 }}>
                <FormControl sx={{ autoWidth: true, fontSize: 1 }} size="small">
                  <Select
                    value={valueOfSelectedYear}
                    onChange={handleYearChange}
                    sx={{ fontSize: 17, color: colors.blue1 }}
                  >
                    {entriesYearList.map((year, i) => (
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
                <StackedBarGraph
                  isEntriesEmpty={isEntriesEmpty}
                  graphOrientation={graphOrientation}
                  stackedBarGraphData={stackedBarGraphData}
                />
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
                  {entriesYearList.map((year, i) => (
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
              <StackedBarGraph
                isEntriesEmpty={isEntriesEmpty}
                graphOrientation={graphOrientation}
                stackedBarGraphData={stackedBarGraphData}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default memo(QuickInfo);
