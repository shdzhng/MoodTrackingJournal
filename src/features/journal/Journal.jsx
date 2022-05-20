import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MasonryContainer, FlexContainer } from './Journal.style';
import SingleEntryCard from './SingleEntry';
import Masonry from '@mui/lab/Masonry';
import EntryPopUp from '../popUp/EntryPopUp';
import SelectLabels from './SortButton.jsx';

export default function Journal() {
  const journal = useSelector((state) => state.journal.entries);

  function renderEntryCards() {
    return (
      <>
        <MasonryContainer>
          <FlexContainer>
            <SelectLabels />
            <EntryPopUp />
          </FlexContainer>
          <Masonry columns={3} spacing={3} sx={{ p: 0 }}>
            {journal.map((entry) => (
              <SingleEntryCard entry={entry} key={entry.id} />
            ))}
          </Masonry>
        </MasonryContainer>
      </>
    );
  }

  return journal.length ? renderEntryCards() : null;
}
