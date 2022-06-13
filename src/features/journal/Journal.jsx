import React, { useEffect } from 'react';
import EntryPopUp from './EntryPopUp';
import SelectLabels from './SortButton.jsx';
import SingleEntryCard from './SingleEntry';
import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { MasonryContainer, FlexContainer } from './Journal.style';
import { useDispatch } from 'react-redux';
import { sortEntries } from './journalSlice';

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
