import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

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

  const fetchEmotionData = useCallback(() => {
    entries.forEach((entry) => {
      emotionCounter[entry.feeling] += 1;
    });
  }, []);

  fetchEmotionData();

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: Object.keys(emotionCounter),
      datasets: [
        {
          label: 'Emotion Count',
          data: Object.values(emotionCounter),
          borderColor: 'rgb(53,162,235)',
          backgroundColor: `rgba(53,162,234,0.4)`,
        },
      ],
    });

    setChartOptions({
      responsive: true,
      plugins: {
        legends: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Emotion Count',
        },
      },
    });
  }, []);

  return <Bar options={chartOptions} data={chartData} />;
}
