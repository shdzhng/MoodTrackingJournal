import React from 'react';
import { Bar } from 'react-chartjs-2';

function StackedBarGraph({ selectedYear, monthObj }) {
  return (
    <Bar
      options={{
        indexAxis: 'y',
        scales: {
          xAxes: {
            stacked: true,
            ticks: {
              stepSize: 20,
            },
          },
          yAxes: {
            stacked: true,
          },
        },
        plugins: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Entry Count by Month',
          },
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
      }}
      data={{
        labels: [['Total', 'Entry', 'Count']],
        datasets: [
          {
            label: 'January',
            data: [monthObj[selectedYear][1]],
            backgroundColor: '#D9ED92',
            borderWidth: 0,
          },
          {
            label: 'Febuary',
            data: [monthObj[selectedYear][2]],
            backgroundColor: '#B5E48C',
            borderWidth: 0,
          },
          {
            label: 'March',
            data: [monthObj[selectedYear][3]],
            backgroundColor: '#99D98C',
            borderWidth: 0,
          },
          {
            label: 'April',
            data: [monthObj[selectedYear][4]],
            backgroundColor: '#76C893',
            borderWidth: 0,
          },
          {
            label: 'May',
            data: [monthObj[selectedYear][5]],
            backgroundColor: '#52B69A',
            borderWidth: 0,
          },
          {
            label: 'June',
            data: [monthObj[selectedYear][6]],
            backgroundColor: '#34a493',
            borderWidth: 0,
          },
          {
            label: 'July',
            data: [monthObj[selectedYear][7]],
            backgroundColor: '#34A0A4',
            borderWidth: 0,
          },
          {
            label: 'August',
            data: [monthObj[selectedYear][8]],
            backgroundColor: '#348fa4',
            borderWidth: 0,
          },
          {
            label: 'September',
            data: [monthObj[selectedYear][9]],
            backgroundColor: '#168AAD',
            borderWidth: 0,
          },
          {
            label: 'October',
            data: [monthObj[selectedYear][10]],
            backgroundColor: '#1A759F',
            borderWidth: 0,
          },
          {
            label: 'November',
            data: [monthObj[selectedYear][11]],
            backgroundColor: '#1E6091',
            borderWidth: 0,
          },
          {
            label: 'December',
            data: [monthObj[selectedYear][12]],
            backgroundColor: '#184E77',
            borderWidth: 0,
          },
        ],
      }}
    />
  );
}

export default StackedBarGraph;
