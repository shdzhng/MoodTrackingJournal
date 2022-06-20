import React, { memo } from 'react';
import { Bar } from 'react-chartjs-2';
import { CircularProgress, Box } from '@mui/material';

function StackedBarGraph({
  stackedBarGraphData,
  graphOrientation,
  isEntriesEmpty,
}) {
  if (isEntriesEmpty) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50%"
      >
        <CircularProgress />
      </Box>
    );
  }

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

export default memo(StackedBarGraph);
