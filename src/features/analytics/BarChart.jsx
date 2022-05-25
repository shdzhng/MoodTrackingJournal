import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import colors from '../../constants/Colors';

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let emotionCounter = {
  loved: 0,
  happy: 0,
  calm: 0,
  sad: 0,
  anxious: 0,
  angry: 0,
};

export default function BarChart() {
  const entries = useSelector(({ journal }) => journal.entries);

  entries.forEach((entry) => {
    emotionCounter[entry.feeling] += 1;
  });

  return (
    <Bar
      data={{
        labels: Object.keys(emotionCounter),
        datasets: [
          {
            data: Object.values(emotionCounter),
            borderColor: Object.values(colors.variantMap),
            backgroundColor: Object.values(colors.variantMap),
            borderWidth: 1,
          },
        ],
      }}
      options={{
        plugins: {
          responsive: true,
          maintainAspectRatio: false,
          offset: true,

          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
      }}
    />
  );
}
