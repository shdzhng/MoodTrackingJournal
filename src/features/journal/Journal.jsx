import React from 'react';
import EntryPopUp from '../popUp/EntryPopUp';
import SelectLabels from './SortButton.jsx';
import SingleEntryCard from './SingleEntry';
import { Masonry } from '@mui/lab';
import { useSelector } from 'react-redux';
import { MasonryContainer, FlexContainer } from './Journal.style';

export default function Journal() {
  const journal = useSelector((state) => state.journal.entries);

  function renderEntryCards() {
    return (
      <>
        <MasonryContainer>
          <Masonry columns={3} spacing={4} sx={{ px: 0, mx: 0 }}>
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
