import EditPopUp from './EditPopUp';
import moment from 'moment';
import DeleteIcon from '@mui/icons-material/Delete';
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
import { removeEntry } from '../journal/journalSlice';

export default function SingleEntryCard({ entry }) {
  const dispatch = useDispatch();
  const formattedDate = moment.unix(entry.date).format('MMMM Do YYYY');

  const handleRemove = (entry) => {
    dispatch(removeEntry(entry));
  };

  return (
    <EntryContainer>
      <EntryName variant={entry.feeling}>{entry.name}</EntryName>
      <EntryDate>Posted on: {formattedDate}</EntryDate>
      <Entry>{entry.entry}</Entry>
      <FeelingBubble variant={entry.feeling}> </FeelingBubble>
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
