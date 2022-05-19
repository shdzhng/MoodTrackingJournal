import styled from 'styled-components';
import colors from '../../constants/Colors';
import Button from '@mui/material/Button';
import { Modal } from '@mui/material';

const variantMap = {
  loved: `#ef8cee`,
  happy: `#dec800`,
  calm: `#6ba26b`,
  sad: `#23BEB6`,
  anxious: `#9a1e84`,
  sick: `#4D1F84`,
  angry: `#cb2222`,
  daring: `#ebb756`,
  average: `#5a8fac`,
};

const EntryWindow = styled(Modal)(() => [
  // { width: 300 },
  // { backgroundColor: `${colors.blue1} !important` },
]);

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
  font-size: 1.25rem;
  transition-duration: 200ms;
  &:focus-visible {
    outline: 1px double ${colors.blue1};
  }
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
  resize: vertical;
  &:focus-visible {
    outline: 1px double ${colors.blue1};
    color: ${colors.blue1};
  }
`;

const FeelingButtonContainer = styled.div`
  margin: 1rem auto;
`;

const FeelingButton = styled.button`
  padding: 1rem;
  border-radius: 2.5rem;
  border: none;
  color: white;
  opacity: 0.8;
  background-color: ${({ variant }) => variantMap[variant]};
  transition-duration: 200ms;
  &:hover {
    opacity: 1;
  }

  ${({ selected }) => {
    if (selected) {
      return `-webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
opacity:1;
`;
    }
  }};
`;

const FormButtonContainer = styled.div`
  margin: 1rem auto 0 auto;
`;

const SubmitEntryButton = styled(Button)(() => [
  { width: 300 },
  { backgroundColor: `${colors.blue1} !important` },
  { color: `white !important` },
]);

export {
  FeelingButton,
  SubmitEntryButton,
  JournalEntryContainer,
  FeelingButtonContainer,
  FormButtonContainer,
  EntryTitleInput,
  EntryInput,
  EntryWindow,
};
