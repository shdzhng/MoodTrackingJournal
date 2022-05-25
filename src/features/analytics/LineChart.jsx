import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import colors from '../../constants/Colors';

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

let emotionCounter = {
  loved: 0,
  happy: 0,
  calm: 0,
  sad: 0,
  anxious: 0,
  angry: 0,
};

let monthCounter = {
  January: 0,
  February: 0,
  March: 0,
  April: 0,
  May: 0,
  June: 0,
  July: 0,
  August: 0,
  September: 0,
  October: 0,
  November: 0,
  December: 0,
};

const MONTHS = [
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function LineChart() {
  const entries = useSelector(({ journal }) => journal.entries);

  const calculateData = (entries) => {
    entries.forEach((entry) => {
      emotionCounter[entry.feeling] += 1;
    });

    entries.forEach((entry) => {
      const monthOfEntry = entry.date.split(',')[0].split(' ')[0];
      monthCounter[monthOfEntry] += 1;
    });
  };

  calculateData(entries);

  return (
    <Line
      data={{
        labels: MONTHS,
        datasets: [
          {
            label: 'Loved',
            data: [0, 3, 5, 6, 3, 6, 7],
            backgroundColor: colors.variantMap.loved,
            borderColor: `${colors.variantMap.loved}50`,
          },
          {
            label: 'Happy',
            data: [3, 2, 3, 5, 7, 3, 2],
            backgroundColor: colors.variantMap.happy,
            borderColor: `${colors.variantMap.happy}50`,
          },
          {
            label: 'Calm',
            data: [9, 2, 4, 5, 7, 4, 5],
            backgroundColor: colors.variantMap.calm,
            borderColor: `${colors.variantMap.calm}50`,
          },
          {
            label: 'Sad',
            data: [8, 2, 3, 5, 6, 2, 1],
            backgroundColor: colors.variantMap.sad,
            borderColor: `${colors.variantMap.sad}50`,
          },
          {
            label: 'Anxious',
            data: [9, 8, 9, 6, 8, 9, 6],
            backgroundColor: colors.variantMap.anxious,
            borderColor: `${colors.variantMap.anxious}50`,
          },
          {
            label: 'Angry',
            data: [1, 2, 3, 4, 1, 3, 2],
            backgroundColor: colors.variantMap.angry,
            borderColor: `${colors.variantMap.angry}50`,
          },
        ],
      }}
      options={{
        plugins: {
          responsive: true,
          legend: {
            // display: false,
          },
        },
        maintainAspectRatio: false,
      }}
    />
  );
}
