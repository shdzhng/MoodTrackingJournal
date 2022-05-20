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
import EditPopUp from '../popUp/EditPopUp';

export default function SingleEntryCard({ entry }) {
  const dispatch = useDispatch();
  const handleRemove = (entry) => {
    dispatch(removeEntry(entry));
  };

  return (
    <EntryContainer>
      <EntryName variant={entry.feeling}>{entry.name}</EntryName>
      <EntryDate>posted on: {entry.date.split(', ')[0]}</EntryDate>
      {entry.editDate ? (
        <EntryDate>last edited on: {entry.editDate.split(', ')[0]}</EntryDate>
      ) : null}

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
      <EditPopUp entry={entry}></EditPopUp>
    </EntryContainer>
  );
}
