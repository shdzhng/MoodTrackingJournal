import React from 'react';
import colors from '../../../constants/colors';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { months } from '../../../constants/months';
import CircularProgress from '@mui/material/CircularProgress';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({
  selectedYear,
  currentMonth,
  barGraphData,
  isEntriesEmpty,
}) {
  if (isEntriesEmpty) {
    return <CircularProgress />;
  }

  return (
    <Bar
      data={{
        labels: months.slice(0, currentMonth),
        datasets: barGraphData,
      }}
      options={{
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
        plugins: {
          responsive: true,
          maintainAspectRatio: false,
          offset: true,
          title: {
            display: true,
            text: `Entry Count Cumulative Total Per Feeling (${selectedYear})`,
          },
          legend: {
            display: true,
          },
        },
        maintainAspectRatio: false,
      }}
    />
  );
}
