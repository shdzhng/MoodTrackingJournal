import React from 'react';
import { useSelector } from 'react-redux';
import { MasonryContainer } from './Journal.style';
import SingleEntryCard from './SingleEntry';
import Masonry from '@mui/lab/Masonry';

function Journal() {
  const journal = useSelector((state) => state.journal.entries);

  function renderEntryCards() {
    return (
      <MasonryContainer>
        <Masonry columns={3} spacing={3} sx={{ p: 0 }}>
          {journal.map((entry) => (
            <SingleEntryCard entry={entry} key={entry.id} />
          ))}
        </Masonry>
      </MasonryContainer>
    );
  }

  return journal.length ? renderEntryCards() : null;
}

export default Journal;
