import styled from 'styled-components';
import colors from '../../constants/Colors';

const variantMap = {
  happy: colors.red1,
  medium: colors.yellow500,
  sad: colors.green600,
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 1rem auto 0 auto;
`;

const TaskNameInput = styled.input`
  border: 1px solid ${colors.blue2};
  color: ${colors.blue2};
  margin: 0.5rem auto;
  width: 70vw;
  font-weight: 600;
  font-size: 1.5rem;
`;

const TaskDescriptionInput = styled.textarea`
  border: 1px solid ${colors.blue2};
  color: ${colors.blue2};
  margin: 0.5rem auto;
  width: 70vw;
  height: 2rem;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 1rem;
`;

const PriorityButtonContainer = styled.div`
  margin: 1rem auto 0 auto;
`;

const FeelingButton = styled.button`
  padding: 1rem 1rem;
  border-radius: 2.5rem;
  border: 0;
  color: white;
  background-color: ${colors.blue2};
  background-color: ${({ selected }) =>
    selected ? `${colors.blue1}` : 'none'};
`;

const FormButtonContainer = styled.div`
  margin: 1rem auto 0 auto;
`;

const FormButton = styled.button`
  background-color: ${colors.red3};
  color: white;
  border: 0;
  margin: 0 0.5rem;
  padding: 0 1rem;
  border-radius: 1rem;
`;

export {
  FeelingButton,
  FormButton,
  InputContainer,
  PriorityButtonContainer,
  FormButtonContainer,
  TaskNameInput,
  TaskDescriptionInput,
};
