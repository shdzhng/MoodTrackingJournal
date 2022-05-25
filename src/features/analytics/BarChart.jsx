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
import months from '../../constants/months';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const [selectedYear, setSelectedYear] = useState(2022);
  const entries = useSelector(({ journal }) => journal.entries);

  const records = {};

  const formatData = (entries) => {
    entries.forEach((entry) => {
      const monthOfEntry = moment.unix(entry.date).format('M');
      const yearOfEntry = moment.unix(entry.date).format('YYYY');

      const feeling = entry.feeling;
      if (!records[feeling]) records[feeling] = {};
      if (!records[feeling][yearOfEntry]) records[feeling][yearOfEntry] = {};
      if (!records[feeling][yearOfEntry][monthOfEntry])
        records[feeling][yearOfEntry][monthOfEntry] = 0;
      records[feeling][yearOfEntry][monthOfEntry]++;
    });
  };

  formatData(entries);

  if (Object.keys(records).length < 1) {
    console.log('BAR GRAPH cant find record');
    console.log(Object.keys(records));
    return <p>can't find data</p>;
  }

  return (
    <Bar
      data={{
        labels: months,
        datasets: [
          {
            label: 'Loved',
            data: Object.values(records.loved[selectedYear]),
            backgroundColor: colors.variantMap.loved,
          },
          {
            label: 'Happy',
            data: Object.values(records.happy[selectedYear]),
            backgroundColor: colors.variantMap.happy,
          },
          {
            label: 'Calm',
            data: Object.values(records.calm[selectedYear]),
            backgroundColor: colors.variantMap.calm,
          },
          {
            label: 'Sad',
            data: Object.values(records.sad[selectedYear]),
            backgroundColor: colors.variantMap.sad,
          },
          {
            label: 'Anxious',
            data: Object.values(records.anxious[selectedYear]),
            backgroundColor: colors.variantMap.anxious,
          },
          {
            label: 'Angry',
            data: Object.values(records.angry[selectedYear]),
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
          legend: {
            display: true,
          },
        },
        maintainAspectRatio: false,
      }}
    />
  );
}
