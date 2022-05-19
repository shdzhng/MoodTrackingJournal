import {
  EntryContainer,
  EntryName,
  Entry,
  FeelingBubble,
  IconButtonStyled,
} from './Journal.style';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeEntry } from '../journal/journalSlice';

export default function SingleEntryCard({ entry }) {
  const dispatch = useDispatch;
  const handleRemove = (entry) => {
    dispatch(removeEntry(entry));
  };

  return (
    <EntryContainer>
      <EntryName variant={entry.feeling}>{entry.name}</EntryName>
      <Entry>{entry.entry}</Entry>
      <FeelingBubble variant={entry.feeling}> </FeelingBubble>
      <IconButtonStyled
        aria-label="delete"
        onClick={(e) => {
          handleRemove(e);
        }}
        size="small"
      >
        <DeleteIcon fontSize="inherit" />
      </IconButtonStyled>
    </EntryContainer>
  );
}
