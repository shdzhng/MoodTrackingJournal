import { useSelector, useDispatch } from 'react-redux';
import {
  toggleTodoComplete,
  toggleTodoEditMode,
} from '../todoListInput/todoListSlice';
import {
  EntryContainer,
  EntryName,
  Entry,
  FeelingBubble,
} from './todoListDisplay.styles';

export default function SingleTodoCard({ task }) {
  return (
    <EntryContainer>
      <EntryName variant={task.feeling}>{task.name}</EntryName>
      <Entry>{task.entry}</Entry>
      <FeelingBubble variant={task.feeling}> </FeelingBubble>
    </EntryContainer>
  );
}
