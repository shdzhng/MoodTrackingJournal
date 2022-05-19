import styled from 'styled-components';
import colors from '../../constants/Colors';

const ListContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 1rem auto 0 auto;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
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
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'high':
        return colors.red1;
      case 'medium':
        return colors.yellow500;
      case 'low':
        return colors.green600;
    }
  }};
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
  color: ${({ variant }) => {
    switch (variant) {
      case 'high':
        return colors.blue1;
      case 'medium':
        return colors.blue1;
      case 'low':
        return colors.blue1;
    }
  }};
`;
const TaskDescription = styled.p``;

export { ListContainer, TaskContainer, TaskName, TaskDescription, TaskBubble };
