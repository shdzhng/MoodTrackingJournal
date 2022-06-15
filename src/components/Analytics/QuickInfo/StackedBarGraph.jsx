import React from 'react';
import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';

function StackedBarGraph({ stackedBarGraphData, graphOrientation }) {
  return (
    <Bar
      options={{
        indexAxis: graphOrientation,
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
        datasets: stackedBarGraphData,
      }}
    />
  );
}

export default StackedBarGraph;
