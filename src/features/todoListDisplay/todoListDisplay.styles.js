import styled, { css } from 'styled-components';
import Masonry from '@mui/lab/Masonry';
import colors from '../../constants/Colors';

const variantMap = {
  high: colors.red1,
  medium: colors.yellow500,
  low: colors.green600,
};

const MasonryContainer = styled.div`
  width: 75%;
  margin: 1rem auto 0 auto;
`;

const TaskContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  width: 25%;
  height: fit-content;
  background-color: ${colors.blue3};
  border-radius: 1rem;
  -webkit-box-shadow: 2px 2px 3px 0px ${colors.blue1};
  -moz-box-shadow: 2px 2px 3px 0px ${colors.blue1};
  box-shadow: 2px 2px 3px 0px ${colors.blue1};
  position: relative;
`;

const TaskBubble = styled.div`
  position: absolute;
  background-color: ${({ variant }) => variantMap[variant]};
  -webkit-box-shadow: 0px 0px 0px 3px rgba(248, 242, 224, 1);
  -moz-box-shadow: 0px 0px 0px 3px rgba(248, 242, 224, 1);
  box-shadow: 0px 0px 0px 3px rgba(248, 242, 224, 1);
  padding: 1rem;
  border-radius: 1rem;
  top: 5%;
  right: 5%;
`;

const TaskName = styled.p`
  font-size: 1.25rem;
  font-weight: 900;
  margin-top: 2.5rem;
  color: ${colors.blue1};
`;
const TaskDescription = styled.p`
  color: ${colors.blue1};
  font-size: 1.1rem;
`;

export {
  Masonry,
  TaskContainer,
  TaskName,
  TaskDescription,
  TaskBubble,
  MasonryContainer,
};
