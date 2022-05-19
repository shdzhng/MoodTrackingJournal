import styled from 'styled-components';
import colors from '../../constants/Colors';
import Button from '@mui/material/Button';
import { experimental_sx as sx } from '@mui/system';

const EntryWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 60%;
  padding: 4;
  background-color: #fff8e5;
  border: 2px solid ${colors.background};
  padding: 2rem;
  display: flex;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FeelingButtonContainer = styled.div`
  margin: 1rem 1rem 0 0;
  display: flex;
`;

const PopUpButton = styled(Button)({
  width: 300,
  backgroundColor: `${colors.blue1} !important`,
  color: `white !important`,
});

const EntryTitleInput = styled.input`
  border: 1px solid ${colors.blue2};
  color: ${colors.blue2};
  margin: 0.5rem auto;
  width: 90%;
  font-weight: 600;
  font-size: 1.25rem;
  transition-duration: 200ms;
  &:focus-visible {
    outline: 1px double ${colors.blue1};
  }
  &::placeholder {
    color: #d6cfbc;
  }
`;

const EntryInput = styled.textarea`
  border: 1px solid ${colors.blue2};
  color: ${colors.blue2};
  margin: 0.5rem auto;
  width: 90%;
  height: 80%;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 1rem;
  resize: vertical;
  &:focus-visible {
    outline: 1px double ${colors.blue1};
    color: ${colors.blue1};
  }
  &::placeholder {
    color: #d6cfbc;
  }
`;

const FeelingButton = styled.button`
  padding: 1rem;
  border: none;
  color: white;
  opacity: 0.8;

  background-color: ${({ variant }) => colors.variantMap[variant]};
  transition-duration: 200ms;
  &:hover {
    opacity: 1;
  }

  ${({ selected }) => {
    if (selected) {
      return `-webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
opacity:1; text-decoration: underline;
`;
    }
  }};
`;

const CenterButton = styled.div`
  margin: 1rem auto 0 auto;
`;

const SubmitEntryButton = styled(Button)({
  width: 300,
  backgroundColor: `${colors.blue1} !important`,
  color: `white !important`,
});

const PopUpButtonContainer = styled.div`
  margin: 2rem;
`;

export {
  FeelingButton,
  PopUpButtonContainer,
  SubmitEntryButton,
  FeelingButtonContainer,
  CenterButton,
  EntryTitleInput,
  EntryInput,
  InputContainer,
  EntryWindow,
  PopUpButton,
};
