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
          <Masonry
            columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
            spacing={3}
            sx={{ p: 0, m: 0 }}
          >
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
