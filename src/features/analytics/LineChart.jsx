import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import colors from '../../constants/Colors';
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
import months from '../../constants/months';

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
  const selectedYear = 2022;

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

  // need to fix display months, to make it adaptive to current month.. maybe show up to 6 months at a time?
  //need to find out how to connect the monthly count with each feeling

  if (Object.keys(records).length < 1) {
    console.log('LINE GRAPH cant find record');
    console.log(Object.keys(records));
    return <p>can't find data</p>;
  }
  return (
    <Line
      data={{
        labels: months,
        datasets: [
          {
            label: 'Loved',
            data: Object.values(records.loved[selectedYear]),
            backgroundColor: colors.variantMap.loved,
            borderColor: `${colors.variantMap.loved}50`,
          },
          {
            label: 'Happy',
            data: Object.values(records.happy[selectedYear]),
            backgroundColor: colors.variantMap.happy,
            borderColor: `${colors.variantMap.happy}50`,
          },
          {
            label: 'Calm',
            data: Object.values(records.calm[selectedYear]),
            backgroundColor: colors.variantMap.calm,
            borderColor: `${colors.variantMap.calm}50`,
          },
          {
            label: 'Sad',
            data: Object.values(records.sad[selectedYear]),
            backgroundColor: colors.variantMap.sad,
            borderColor: `${colors.variantMap.sad}50`,
          },
          {
            label: 'Anxious',
            data: Object.values(records.anxious[selectedYear]),
            backgroundColor: colors.variantMap.anxious,
            borderColor: `${colors.variantMap.anxious}50`,
          },
          {
            label: 'Angry',
            data: Object.values(records.angry[selectedYear]),
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
            position: 'top',
          },
        },
        maintainAspectRatio: false,
      }}
    />
  );
}
