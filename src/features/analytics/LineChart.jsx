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

  invertData(entries);
  console.log(Object.values(records.loved[2022]));

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
            data: Object.values(records.loved[2022]),
            backgroundColor: colors.variantMap.loved,
            borderColor: `${colors.variantMap.loved}50`,
          },
          {
            label: 'Happy',
            data: Object.values(records.happy[2022]),
            backgroundColor: colors.variantMap.happy,
            borderColor: `${colors.variantMap.happy}50`,
          },
          {
            label: 'Calm',
            data: Object.values(records.calm[2022]),
            backgroundColor: colors.variantMap.calm,
            borderColor: `${colors.variantMap.calm}50`,
          },
          {
            label: 'Sad',
            data: Object.values(records.sad[2022]),
            backgroundColor: colors.variantMap.sad,
            borderColor: `${colors.variantMap.sad}50`,
          },
          {
            label: 'Anxious',
            data: Object.values(records.anxious[2022]),
            backgroundColor: colors.variantMap.anxious,
            borderColor: `${colors.variantMap.anxious}50`,
          },
          {
            label: 'Angry',
            data: Object.values(records.angry[2022]),
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
