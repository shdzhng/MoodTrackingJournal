import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import colors from '../../constants/Colors';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

export default function LineChart() {
  const entries = useSelector(({ journal }) => journal.entries);
  const records = {};

  const invertData = (entries) => {
    entries.forEach((entry) => {
      const monthOfEntry = moment(entry.date).format('M');
      const yearOfEntry = moment(entry.date).format('YYYY');
      const feeling = entry.feeling;
      if (!records[feeling]) records[feeling] = {};
      if (!records[feeling][yearOfEntry]) records[feeling][yearOfEntry] = {};
      if (!records[feeling][yearOfEntry][monthOfEntry])
        records[feeling][yearOfEntry][monthOfEntry] = 0;
      records[feeling][yearOfEntry][monthOfEntry]++;
    });
  };

  const formatData = (entries) => {
    entries.forEach((entry) => {
      const monthOfEntry = entry.date.split('/')[0];
      const yearOfEntry = entry.date.split('/')[2];
      const feeling = entry.feeling;

      if (!records[yearOfEntry]) records[yearOfEntry] = {};
      if (!records[yearOfEntry][monthOfEntry]) {
        records[yearOfEntry][monthOfEntry] = {
          loved: 0,
          happy: 0,
          calm: 0,
          sad: 0,
          anxious: 0,
          angry: 0,
        };
      }

      records[yearOfEntry][monthOfEntry][feeling]++;
    });

    Object.keys(records).map((year) => {
      Object.keys(records[year]).map((month) => {
        records[year][month].cumulative = 0;
        Object.values(records[year][month]).forEach(
          (count) => (records[year][month].cumulative += count)
        );
      });
    });
  };

  invertData(entries);
  // console.log(Object.valuesrecords.loved[2022]);
  // formatData(entries);
  // need to fix display months, to make it adaptive to current month.. maybe show up to 6 months at a time?
  //need to find out how to connect the monthly count with each feeling

  return (
    <Line
      data={{
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
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
