import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import colors from '../../constants/colors';
import feelingsEnums from '../../constants/months';
import moment from 'moment';

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
import { monthlyCounterObj } from '../../constants/months';
import { months, monthsObj } from '../../constants/months';
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

export default function LineChart({ records, selectedYear }) {
  if (Object.keys(records).length < 1) {
    return <CircularProgress></CircularProgress>;
  }

  return (
    <Line
      data={{
        labels: months,
        datasets: [
          {
            label: 'Loved',
            data: Object.values(records[selectedYear].loved),
            backgroundColor: colors.variantMap.loved,
            borderColor: `${colors.variantMap.loved}50`,
          },
          {
            label: 'Happy',
            data: Object.values(records[selectedYear].happy),
            backgroundColor: colors.variantMap.happy,
            borderColor: `${colors.variantMap.happy}50`,
          },
          {
            label: 'Calm',
            data: Object.values(records[selectedYear].calm),
            backgroundColor: colors.variantMap.calm,
            borderColor: `${colors.variantMap.calm}50`,
          },
          {
            label: 'Sad',
            data: Object.values(records[selectedYear].sad),
            backgroundColor: colors.variantMap.sad,
            borderColor: `${colors.variantMap.sad}50`,
          },
          {
            label: 'Anxious',
            data: Object.values(records[selectedYear].anxious),
            backgroundColor: colors.variantMap.anxious,
            borderColor: `${colors.variantMap.anxious}50`,
          },
          {
            label: 'Angry',
            data: Object.values(records[selectedYear].angry),
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
            text: `Trends (${selectedYear})`,
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
