import React, { memo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { months } from '../../../constants/months';
import { CircularProgress, Box } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

function LineChart({
  isEntriesEmpty,
  selectedYear,
  currentMonth,
  lineGraphData,
}) {
  if (isEntriesEmpty) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50%"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Line
      data={{
        labels: months.slice(0, currentMonth),
        datasets: lineGraphData,
      }}
      options={{
        plugins: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: `Word Count Trends Per Feeling (${selectedYear})`,
          },
          legend: {
            position: 'top',
          },
        },
        maintainAspectRatio: false,
      }}
    />
  );
}

export default memo(LineChart);
