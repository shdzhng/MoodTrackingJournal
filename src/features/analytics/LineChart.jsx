import React from 'react';
import colors from '../../constants/colors';
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
import { months } from '../../constants/months';
import CircularProgress from '@mui/material/CircularProgress';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

export default function LineChart({ records, selectedYear, currentMonth }) {
  if (Object.keys(records).length < 1) {
    return <CircularProgress></CircularProgress>;
  }

  return (
    <Line
      data={{
        labels: months.slice(0, currentMonth),
        datasets: [
          {
            label: 'Loved',
            data: Object.values(records[selectedYear].loved.wordCount),
            backgroundColor: colors.variantMap.loved,
            borderColor: `${colors.variantMap.loved}50`,
          },
          {
            label: 'Happy',
            data: Object.values(records[selectedYear].happy.wordCount),
            backgroundColor: colors.variantMap.happy,
            borderColor: `${colors.variantMap.happy}50`,
          },
          {
            label: 'Calm',
            data: Object.values(records[selectedYear].calm.wordCount),
            backgroundColor: colors.variantMap.calm,
            borderColor: `${colors.variantMap.calm}50`,
          },
          {
            label: 'Sad',
            data: Object.values(records[selectedYear].sad.wordCount),
            backgroundColor: colors.variantMap.sad,
            borderColor: `${colors.variantMap.sad}50`,
          },
          {
            label: 'Anxious',
            data: Object.values(records[selectedYear].anxious.wordCount),
            backgroundColor: colors.variantMap.anxious,
            borderColor: `${colors.variantMap.anxious}50`,
          },
          {
            label: 'Angry',
            data: Object.values(records[selectedYear].angry.wordCount),
            backgroundColor: colors.variantMap.angry,
            borderColor: `${colors.variantMap.angry}50`,
          },
        ],
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
