import styled, { css } from 'styled-components';
import Masonry from '@mui/lab/Masonry';
import colors from '../../constants/Colors';
import IconButton from '@mui/material/IconButton';

const MasonryContainer = styled.div`
  width: 90%;
  margin: 2rem auto 0 auto;
`;

const EntryContainer = styled.div`
  padding: 1rem;
  background-color: ${colors.blue3};
  border-radius: 1rem;
  -webkit-box-shadow: 2px 2px 3px 0px ${colors.blue1};
  -moz-box-shadow: 2px 2px 3px 0px ${colors.blue1};
  box-shadow: 2px 2px 3px 0px ${colors.blue1};
  position: relative;
  word-wrap: break-word;
`;

const IconButtonStyled = styled(IconButton)`
  position: absolute;
`;

const FeelingBubble = styled.div`
  position: absolute;
  background-color: ${({ variant }) => colors.variantMap[variant]};
  -webkit-box-shadow: 0px 0px 0px 3px rgba(248, 242, 224, 1);
  -moz-box-shadow: 0px 0px 0px 3px rgba(248, 242, 224, 1);
  box-shadow: 0px 0px 0px 3px rgba(248, 242, 224, 1);
  padding: 1rem;
  border-radius: 1rem;
  top: -15px;
  transform: translateX(1rem);
  right: 50%;
`;

const EntryName = styled.p`
  font-size: 2rem;
  font-weight: 900;
  margin-top: 0.75rem;
  margin-bottom: 0;
  color: ${colors.blue1};
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

const EntryDate = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${colors.blue1};
`;

const Entry = styled.p`
  color: ${colors.blue1};
  font-size: 1.15rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FlexContainer = styled.div`
  display: flex;
  margin: 2rem 0 2rem 5rem;
  align-items: center;
`;

export {
  Masonry,
  FlexContainer,
  EntryContainer,
  EntryName,
  ButtonContainer,
  EntryDate,
  Entry,
  FeelingBubble,
  MasonryContainer,
  IconButtonStyled,
};
