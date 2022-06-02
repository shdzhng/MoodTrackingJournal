import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useState } from 'react';
import { Chart as ChartJS, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Item from './styled';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import colors from '../../../constants/colors';

ChartJS.register(Title, BarElement, Tooltip, Legend);

function QuickInfo({ selectedYear, setSelectedYear, records }) {
  const currentTime = moment().format('h:mm a');
  const [clockTime, setClockTime] = useState(currentTime);

  setInterval(() => {
    setClockTime(moment().format('h:mm a'));
  }, 1000);

  const entries = useSelector(({ journal }) => journal.entries);
  const monthObj = {};
  const currentDay = moment().format('dddd, MMMM Do, YYYY');
  const currentMonth = moment().format('M');
  const lastMonth = currentMonth - 1;

  entries.forEach((entry) => {
    const entryMonth = moment.unix(entry.date).format('M');
    if (monthObj[entryMonth] === undefined) monthObj[entryMonth] = 0;
    monthObj[entryMonth]++;
  });

  const monthlyDifference =
    monthObj[lastMonth] !== undefined
      ? `${(monthObj[currentMonth] / monthObj[lastMonth]) * 100} %`
      : 'no entries last month ';

  const monthDifferenceDisplay = () => {
    if (monthObj[lastMonth] !== undefined) {
      const difference = (monthObj[currentMonth] / monthObj[lastMonth]) * 100;
      if (difference > 100)
        return (
          <>
            YAY! You journaled{' '}
            <span className="greenhighlight">{difference}</span> more this month
          </>
        );
      return (
        <>
          You journaled{' '}
          <span className="redhighlight">{monthlyDifference}</span>
          less than last month
        </>
      );
    }
    return (
      <>
        No entries found <br />
        from last month
      </>
    );
  };

  const handleChange = (e) => {
    const indexNum = e.target.value / 10;
    setSelectedYear(Object.keys(records)[indexNum]);
  };

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
            <Item>{monthDifferenceDisplay()}</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <FormControl sx={{ autoWidth: true, fontSize: 1 }} size="small">
                <Select
                  value="0"
                  sx={{ fontSize: 17, color: colors.blue1 }}
                  onChange={handleChange}
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
              <Bar
                options={{
                  indexAxis: 'y',
                  scales: {
                    xAxes: {
                      stacked: true,
                      ticks: {
                        stepSize: 20,
                      },
                    },
                    yAxes: {
                      stacked: true,
                    },
                  },
                  plugins: {
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                      display: true,
                      text: 'Entry Count by Month',
                    },
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                }}
                data={{
                  labels: [['Total', 'Entry', 'Count']],
                  datasets: [
                    {
                      label: 'January',
                      data: [monthObj[1]],
                      backgroundColor: '#D9ED92',
                      borderWidth: 0,
                    },
                    {
                      label: 'Febuary',
                      data: [monthObj[2]],
                      backgroundColor: '#B5E48C',
                      borderWidth: 0,
                    },
                    {
                      label: 'March',
                      data: [monthObj[3]],
                      backgroundColor: '#99D98C',
                      borderWidth: 0,
                    },
                    {
                      label: 'April',
                      data: [monthObj[4]],
                      backgroundColor: '#76C893',
                      borderWidth: 0,
                    },
                    {
                      label: 'May',
                      data: [monthObj[5]],
                      backgroundColor: '#52B69A',
                      borderWidth: 0,
                    },
                    {
                      label: 'June',
                      data: [monthObj[6]],
                      backgroundColor: '#34a493',
                      borderWidth: 0,
                    },
                    {
                      label: 'July',
                      data: [monthObj[7]],
                      backgroundColor: '#34A0A4',
                      borderWidth: 0,
                    },
                    {
                      label: 'August',
                      data: [monthObj[8]],
                      backgroundColor: '#348fa4',
                      borderWidth: 0,
                    },
                    {
                      label: 'September',
                      data: [monthObj[9]],
                      backgroundColor: '#168AAD',
                      borderWidth: 0,
                    },
                    {
                      label: 'October',
                      data: [monthObj[10]],
                      backgroundColor: '#1A759F',
                      borderWidth: 0,
                    },
                    {
                      label: 'November',
                      data: [monthObj[11]],
                      backgroundColor: '#1E6091',
                      borderWidth: 0,
                    },
                    {
                      label: 'December',
                      data: [monthObj[12]],
                      backgroundColor: '#184E77',
                      borderWidth: 0,
                    },
                  ],
                }}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default QuickInfo;
