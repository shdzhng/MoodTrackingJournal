import {
  EntryContainer,
  EntryName,
  Entry,
  FeelingBubble,
  IconButtonStyled,
  EntryDate,
} from './Journal.style';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeEntry } from '../journal/journalSlice';

export default function SingleEntryCard({ entry }) {
  const dispatch = useDispatch();
  const handleRemove = (entry) => {
    dispatch(removeEntry(entry));
  };

  return (
    <EntryContainer>
      <EntryName variant={entry.feeling}>{entry.name}</EntryName>
      <EntryDate>{entry.date.split(', ')[0]}</EntryDate>
      <Entry>{entry.entry}</Entry>

      <FeelingBubble variant={entry.feeling}> </FeelingBubble>
      <IconButtonStyled
        aria-label="delete"
        onClick={() => {
          handleRemove(entry);
        }}
        size="small"
      >
        <DeleteIcon fontSize="inherit" />
      </IconButtonStyled>
    </EntryContainer>
  );
}
