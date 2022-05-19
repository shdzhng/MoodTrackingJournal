import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { sortEntries } from './journalSlice';
import InputLabel from '@mui/material/InputLabel';

export default function SelectLabels() {
  const dispatch = useDispatch();
  const [sortMode, setSortMode] = useState('newstFirst');

  const handleSort = ({ target }) => {
    setSortMode(target.value);
  };

  useEffect(() => {
    dispatch(sortEntries(sortMode));
  }, [sortMode]);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Sort By</InputLabel>
        <Select value={sortMode} label="Sort By" onChange={handleSort}>
          <MenuItem value="newstFirst">Newst First (default)</MenuItem>
          <MenuItem value="oldestFirst">Oldest First</MenuItem>
          <MenuItem value="positivesFirst">Positives First</MenuItem>
          <MenuItem value="negativesFirst">Negatives First</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
