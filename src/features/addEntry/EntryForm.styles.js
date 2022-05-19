import styled from 'styled-components';
import colors from '../../constants/Colors';

const variantMap = {
  loved: `#ef8cee`,
  happy: `#dec800`,
  calm: `#6ba26b`,
  sad: `#23BEB6`,
  anxious: `#E06D65`,
  sick: `#4D1F84`,
  angry: `#cb2222`,
  daring: `#ebb756`,
  average: `#5a8fac`,
};

const JournalEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 1rem auto 0 auto;
`;

const EntryTitleInput = styled.input`
  border: 1px solid ${colors.blue2};
  color: ${colors.blue2};
  margin: 0.5rem auto;
  width: 70vw;
  font-weight: 600;
  font-size: 1.5rem;
`;

const EntryInput = styled.textarea`
  border: 1px solid ${colors.blue2};
  color: ${colors.blue2};
  margin: 0.5rem auto;
  width: 70vw;
  height: 2rem;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 1rem;
`;

const FeelingButtonContainer = styled.div`
  margin: 1rem auto 0 auto;
`;

const FeelingButton = styled.button`
  padding: 1rem 1rem;
  border-radius: 2.5rem;
  border: ${({ selected }) => (selected ? `1px solid black` : 'none')};
  color: white;
  background-color: ${({ variant }) => variantMap[variant]};
`;

const FormButtonContainer = styled.div`
  margin: 1rem auto 0 auto;
`;

const SubmitEntryButton = styled.button`
  background-color: ${colors.red3};
  color: white;
  border: 0;
  margin: 0 0.5rem;
  padding: 3rem 1rem;
  border-radius: 4rem;

  &hover {
    background-color: black;
  }
`;

export {
  FeelingButton,
  SubmitEntryButton,
  JournalEntryContainer,
  FeelingButtonContainer,
  FormButtonContainer,
  EntryTitleInput,
  EntryInput,
};
