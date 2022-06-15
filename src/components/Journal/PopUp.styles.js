import styled from 'styled-components';
import colors from '../../constants/colors';
import Button from '@mui/material/Button';
import { styled as style } from '@mui/material/styles';
import { createTheme } from '@mui/system';
import { Box } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const EntryWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 60%;
  background-color: #fff8e5;
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
`;

const InputContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const PopUpButton = styled(Button)({
  backgroundColor: `${colors.blue1} !important`,
  borderRadius: `4rem !important`,
  padding: `1rem !important`,
  color: `white !important`,
});

const EntryTitleInput = styled.input`
  border: 1px solid ${colors.accent};
  color: ${colors.blue2};
  margin: 0.5rem auto;
  width: 100%;
  font-weight: 600;
  font-size: 1.25rem;
  transition-duration: 200ms;
  &:focus-visible {
    outline: 1px double ${colors.orange2};
  }
  &::placeholder {
    color: #d6cfbc;
  }
`;

const EntryInput = styled.textarea`
  border: 1px solid ${colors.accent};
  color: ${colors.blue2};
  margin: 0.5rem auto;
  width: 100%;
  height: 80%;
  resize: none;
  word-wrap: break-word;
  word-break: break-all;
  hyphens: auto;
  font-size: 1rem;
  &:focus-visible {
    outline: 1px double ${colors.orange2};
    color: ${colors.blue1};
  }
  &::placeholder {
    color: #d6cfbc;
  }
`;

const FeelingButtonContainer = style(Box)(({ theme }) => ({
  marginTop: 8,
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
  },
}));

const FeelingButton = styled('button')`
  padding: 1rem;
  border: none;
  color: white;
  opacity: 0.8;
  min-width: 95px;
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

const CenterButton = style(Box)(({ theme }) => ({
  marginTop: 8,
  display: 'flex',
  justifyContent: 'center',
}));

const SubmitEntryButton = styled(Button)({
  width: '75%',
  backgroundColor: `${colors.blue1} !important`,
  color: `white !important`,
  margin: '1rem auto 0 auto',
});

const AddressInput = styled.input`
  border: 1px solid ${colors.accent};
  color: ${colors.blue2};
  margin: 0.5rem auto;
  width: 100%;
  font-size: 1rem;
  transition-duration: 200ms;
  &:focus-visible {
    outline: 1px double ${colors.orange2};
  }
  &::placeholder {
    color: #d6cfbc;
  }
`;

const AddressContainer = style(Box)(({ theme }) => ({
  marginTop: 4,
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
}));

export {
  FeelingButton,
  AddressInput,
  SubmitEntryButton,
  CenterButton,
  EntryTitleInput,
  EntryInput,
  InputContainer,
  FeelingButtonContainer,
  EntryWindow,
  PopUpButton,
  AddressContainer,
};
