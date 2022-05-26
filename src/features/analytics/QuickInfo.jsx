import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import colors from '../../constants/Colors';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: colors.background,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: colors.blue1,
}));

function QuickInfo() {
  const entries = useSelector(({ journal }) => journal.entries);
  const monthObj = {};
  const currentDay = moment().format('dddd, MMMM Do YYYY');
  const currentMonth = moment().format('M');
  const lastMonth = currentMonth - 1;

  entries.forEach((entry) => {
    const entryMonth = moment.unix(entry.date).format('M');
    if (monthObj[entryMonth] === undefined) monthObj[entryMonth] = 0;
    monthObj[entryMonth]++;
  });

  const monthlyDifference =
    (monthObj[currentMonth] / monthObj[lastMonth]) * 100;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>{currentDay}</Item>
          </Grid>
          <Grid item xs={4}>
            <Item> Time</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              {monthlyDifference > 100 ? (
                <>
                  YAY! You journaled{' '}
                  <span className="greenhighlight">{monthlyDifference} %</span>{' '}
                  more this month
                </>
              ) : (
                <>
                  You journaled{' '}
                  <span className="redhighlight">{monthlyDifference} % </span>
                  less than last month
                </>
              )}
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item sx={{ height: 150 }}>PIE CHART PLACE HOLDER</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default QuickInfo;
