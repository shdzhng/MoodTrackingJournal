import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import colors from '../../constants/Colors';
import moment from 'moment';
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
import { months } from '../../constants/months';
import CircularProgress from '@mui/material/CircularProgress';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ records, selectedYear }) {
  if (Object.keys(records).length < 1) {
    return <CircularProgress />;
  }

  return (
    <Bar
      data={{
        labels: months,
        datasets: [
          {
            label: 'Loved',
            data: Object.values(records[selectedYear].loved),
            backgroundColor: colors.variantMap.loved,
          },
          {
            label: 'Happy',
            data: Object.values(records[selectedYear].happy),
            backgroundColor: colors.variantMap.happy,
          },
          {
            label: 'Calm',
            data: Object.values(records[selectedYear].calm),
            backgroundColor: colors.variantMap.calm,
          },
          {
            label: 'Sad',
            data: Object.values(records[selectedYear].sad),
            backgroundColor: colors.variantMap.sad,
          },
          {
            label: 'Anxious',
            data: Object.values(records[selectedYear].anxious),
            backgroundColor: colors.variantMap.anxious,
          },
          {
            label: 'Angry',
            data: Object.values(records[selectedYear].angry),
            backgroundColor: colors.variantMap.angry,
          },
        ],
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
            text: 'Mood by Month',
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
