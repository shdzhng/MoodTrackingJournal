import React, { useState, useMemo, useEffect } from 'react';
import colors from '../../../constants/colors';
import moment from 'moment';
import Item from './styled';
import { useSelector } from 'react-redux';
import { MenuItem, FormControl, Select, Box, Grid } from '@mui/material';
import StackedBarGraph from './StackedBarGraph';

function QuickInfo({ selectedYear, setSelectedYear, records }) {
  const currentTime = moment().format('h:mm a');
  const [w, setW] = useState(window.innerWidth);
  const [clockTime, setClockTime] = useState(currentTime);

  setInterval(() => {
    setClockTime(moment().format('h:mm a'));
  }, 1000);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setW(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const entries = useSelector(({ journal }) => journal.entries);

  const currentDay = moment().format('dddd, MMMM Do, YYYY');
  const currentMonth = moment().format('M');
  const lastMonth = currentMonth - 1;

  const monthObj = useMemo(() => {
    const returnedMonthObj = {};

    entries.forEach((entry) => {
      const entryMonth = moment.unix(entry.date).format('M');
      const entryYear = moment.unix(entry.date).format('YYYY');

      if (returnedMonthObj[entryYear] === undefined)
        returnedMonthObj[entryYear] = {
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

      returnedMonthObj[entryYear][entryMonth]++;
    });
    return returnedMonthObj;
  }, [entries]);


  const monthDifferenceMessage = () => {
    if (monthObj[selectedYear][lastMonth] !== (undefined || 0)) {
      const difference = Math.round(
        (monthObj[selectedYear][currentMonth] /
          monthObj[selectedYear][lastMonth]) *
          100
      );

      if (difference > 100) {
        return (
          <>
            You journaled{' '}
            <span className="greenhighlight">{difference}% MORE</span>
            <br /> this month than the last!
          </>
        );
      } else {
        return (
          <>
            You journaled{' '}
            <span className="redhighlight">{difference}% LESS</span>
            <br /> this month than the last :c
          </>
        );
      }
    }

    return (
      <>
        No entries found from <br />
        last month to compare :c <br />
      </>
    );
  };

  const handleYearChange = (e) => {
    const indexNum = e.target.value / 10;
    setSelectedYear(Object.keys(records)[indexNum]);
  };

  const valueOfSelectedYear =
    Object.keys(records).findIndex((years) => {
      return years === selectedYear;
    }) * 10;


  if (w > 1100) {
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
              <Item>{monthDifferenceMessage()}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl sx={{ autoWidth: true, fontSize: 1 }} size="small">
                  <Select
                    value={valueOfSelectedYear}
                    sx={{ fontSize: 14, color: colors.blue1 }}
                    onChange={handleYearChange}
                  >
                    {Object.keys(records)
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
                <StackedBarGraph
                  selectedYear={selectedYear}
                  monthObj={monthObj}
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
                  {Object.keys(records)
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
              <StackedBarGraph
                selectedYear={selectedYear}
                monthObj={monthObj}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default QuickInfo;
