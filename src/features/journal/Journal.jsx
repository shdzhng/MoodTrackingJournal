import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MasonryContainer, FlexContainer } from './Journal.style';
import SingleEntryCard from './SingleEntry';
import Masonry from '@mui/lab/Masonry';
import EntryPopUp from '../popUp/EntryPopUp';
import SelectLabels from './SortButton.jsx';
import { sortEntries } from './journalSlice';

export default function Journal() {
  const journal = useSelector((state) => state.journal.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortEntries('newstFirst'));
  }, [journal]);

  function renderEntryCards() {
    return (
      <>
        <MasonryContainer>
          <Masonry columns={3} spacing={3} sx={{ p: 0 }}>
            {journal.map((entry, i) => (
              <SingleEntryCard entry={entry} key={entry.id} />
            ))}
          </Masonry>
        </MasonryContainer>
      </>
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
