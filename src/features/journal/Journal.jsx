import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MasonryContainer } from './Journal.style';
import SingleEntryCard from './SingleEntry';
import Masonry from '@mui/lab/Masonry';

import SelectLabels from './SortButton.jsx';

export default function Journal() {
  const journal = useSelector((state) => state.journal.entries);

  function renderEntryCards() {
    return (
      <>
        <SelectLabels> </SelectLabels>
        <MasonryContainer>
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
