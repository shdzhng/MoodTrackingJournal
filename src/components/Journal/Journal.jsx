import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';
import { MasonryContainer, FlexContainer } from './Journal.style';
import { sortEntries } from '../../app/journalSlice';
import EntryPopUp from './NewEntryPopUp';
import SelectLabels from './SortButton.jsx';
import SingleEntryCard from './EntryCard';

export default function Journal() {
  const dispatch = useDispatch();

  const journal = useSelector((state) => state.journal.entries);

  useEffect(() => {
    dispatch(sortEntries('newstFirst'));
  }, []);

  function renderEntryCards() {
    return (
      <Box sx={{ marginRight: 2 }}>
        <MasonryContainer>
          <Masonry
            columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
            spacing={3}
            sx={{ p: 0, m: 0, width: 'auto' }}
          >
            {journal.map((entry, i) => (
              <SingleEntryCard entry={entry} key={entry.id} />
            ))}
          </Masonry>
        </MasonryContainer>
      </Box>
    );
  }

  return (
    <>
      <FlexContainer>
        <SelectLabels />
        <EntryPopUp />
      </FlexContainer>
      {journal.length ? renderEntryCards() : null}
    </>
  );
}
