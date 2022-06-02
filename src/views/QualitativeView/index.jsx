import React, { useState, useMemo } from 'react';
import NavigationBar from '../../features/navBar/NavBar';
import axios from 'axios';
import { Box, Typography, Tab, Tabs, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import colors from '../../constants/colors';

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

  if (wordCloud !== undefined) {
    return (
      <>
        <NavigationBar />
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: colors.background,
            display: 'flex',
            height: '100vh',
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{
              borderRight: 1,
              borderColor: colors.accent,
              width: 150,
            }}
          >
            <Tab label="Loved" {...a11yProps(0)} />
            <Tab label="Happy" {...a11yProps(1)} />
            <Tab label="Calm" {...a11yProps(2)} />
            <Tab label="Anxious" {...a11yProps(3)} />
            <Tab label="Sad" {...a11yProps(4)} />
            <Tab label="Angry" {...a11yProps(5)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <img
              src={`data:image/svg+xml;base64,${btoa(wordCloud)}`}
              alt=""
              width="100%"
              height="100%"
            />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <img
              src={`data:image/svg+xml;base64,${btoa(wordCloud)}`}
              alt=""
              width="100%"
              height="100%"
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <img
              src={`data:image/svg+xml;base64,${btoa(wordCloud)}`}
              alt=""
              width="100%"
              height="100%"
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <img
              src={`data:image/svg+xml;base64,${btoa(wordCloud)}`}
              alt=""
              width="100%"
              height="100%"
            />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <img
              src={`data:image/svg+xml;base64,${btoa(wordCloud)}`}
              alt=""
              width="100%"
              height="100%"
            />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <img
              src={`data:image/svg+xml;base64,${btoa(wordCloud)}`}
              alt=""
              width="100%"
              height="100%"
            />
          </TabPanel>
        </Box>
      </>
    );
  }

  return (
    <>
      <NavigationBar />
      <p>You have not made any entries yet</p>
    </>
  );
}