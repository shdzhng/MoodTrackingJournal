import {
  EntryContainer,
  EntryName,
  Entry,
  FeelingBubble,
  IconButtonStyled,
  EntryDate,
  ButtonContainer,
} from './Journal.style';
import { useDispatch } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import { removeEntry } from '../journal/journalSlice';
import EditPopUp from '../popUp/EditPopUp';
import moment from 'moment';

export default function SingleEntryCard({ entry }) {
  const dispatch = useDispatch();
  const handleRemove = (entry) => {
    dispatch(removeEntry(entry));
  };

  return (
    <EntryContainer>
      <EntryName variant={entry.feeling}>{entry.name}</EntryName>
      <EntryDate>posted on: {entry.date.split(',')[0]}</EntryDate>
      <Entry>{entry.entry}</Entry>
      <FeelingBubble variant={entry.feeling}> </FeelingBubble>
      <Entry>
        @{JSON.parse(entry.location).formatted_address.split(',')[0]}
      </Entry>
      <ButtonContainer>
        <EditPopUp entry={entry}></EditPopUp>
        <IconButtonStyled
          aria-label="delete"
          onClick={() => {
            handleRemove(entry);
          }}
          size="small"
        >
          <DeleteIcon fontSize="inherit" />
        </IconButtonStyled>
      </ButtonContainer>
    </EntryContainer>
  );
}
