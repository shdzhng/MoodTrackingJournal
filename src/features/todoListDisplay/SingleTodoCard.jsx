import { useSelector, useDispatch } from 'react-redux';
import {
  toggleTodoComplete,
  toggleTodoEditMode,
} from '../todoListInput/todoListSlice';
import {
  TaskContainer,
  TaskName,
  TaskDescription,
  TaskBubble,
} from './todoListDisplay.styles';

export default function SingleTodoCard({ task }) {
  return (
    <TaskContainer>
      <TaskName variant={task.priority}>{task.name}</TaskName>
      <TaskDescription>{task.description}</TaskDescription>
      <TaskBubble variant={task.priority}> </TaskBubble>
    </TaskContainer>
  );
}
