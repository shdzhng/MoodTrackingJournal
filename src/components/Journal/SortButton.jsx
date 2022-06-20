import React, { useState, useEffect, memo, useCallback } from 'react';
import { MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sortEntries } from '../../app/journalSlice';

function SelectLabels() {
  const dispatch = useDispatch();
  const [sortMode, setSortMode] = useState('newstFirst');

  const handleSort = useCallback(({ target }) => {
    setSortMode(target.value);
  }, []);

  useEffect(() => {
    dispatch(sortEntries(sortMode));
  }, [sortMode]);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Sort By</InputLabel>
        <Select value={sortMode} label="Sort By" onChange={handleSort}>
          <MenuItem value="newstFirst">Newst First</MenuItem>
          <MenuItem value="oldestFirst">Oldest First</MenuItem>
          <MenuItem value="longestFirst">Longest First</MenuItem>
          <MenuItem value="shortestFirst">Shortest First</MenuItem>
          <MenuItem value="positivesFirst">Happy First</MenuItem>
          <MenuItem value="negativesFirst">Sad First</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default memo(SelectLabels);
