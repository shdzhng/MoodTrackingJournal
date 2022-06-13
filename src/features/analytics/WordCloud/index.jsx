import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Tab, Tabs, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import colors from '../../../constants/colors';

const valueEnum = {
  0: 'loved',
  1: 'happy',
  2: 'calm',
  3: 'anxious',
  4: 'sad',
  5: 'angry',
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function QualitativeView() {
  const [value, setValue] = React.useState(0);
  const axios = require('axios');
  const [wordCloud, setWordCloud] = useState(undefined);
  const entries = useSelector(({ journal }) => journal.entries);

  const records = useMemo(() => {
    const returnedRecords = {};

    entries.forEach((entry) => {
      const feeling = entry.feeling;
      if (!returnedRecords[feeling]) {
        returnedRecords[feeling] = '';
      }
      returnedRecords[feeling] += entry.entry;
    });

    return returnedRecords;
  }, [entries]);

  const wordCloudString = records[valueEnum[value]];

  if (wordCloudString !== undefined) {
    axios
      .get(
        `https://quickchart.io/wordcloud?padding=3&case=upper&fontFamily=system-ui&colors=%5B%22%23005F73%22,%22%230A9396%22,%22%2394D2BD%22%5D&removeStopwords=true&text=${wordCloudString}`
      )
      .then((res) => res.data)
      .then(setWordCloud)
      .catch((err) => console.log(err));
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: colors.background,
          display: 'flex',
          height: '90vh',
          width: '100vh',
          mt: 2,
        }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{
            borderRight: 1,
            borderColor: colors.accent,
            mt: 0,
            p: 0,
          }}
        >
          <Tab label="Loved" {...a11yProps(0)} />
          <Tab label="Happy" {...a11yProps(1)} />
          <Tab label="Calm" {...a11yProps(2)} />
          <Tab label="Anxious" {...a11yProps(3)} />
          <Tab label="Sad" {...a11yProps(4)} />
          <Tab label="Angry" {...a11yProps(5)} />
        </Tabs>
        {wordCloud !== undefined ? (
          Object.entries(valueEnum).map((key, i) => {
            return (
              <TabPanel value={value} index={i} key={i}>
                <img
                  src={`data:image/svg+xml;base64,${window.btoa(
                    unescape(encodeURIComponent(wordCloud))
                  )}`}
                />
              </TabPanel>
            );
          })
        ) : (
          <CircularProgress />
        )}
        {}
      </Box>
    </>
  );
}
