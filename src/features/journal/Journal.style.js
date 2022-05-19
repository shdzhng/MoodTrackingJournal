import styled, { css } from 'styled-components';
import Masonry from '@mui/lab/Masonry';
import colors from '../../constants/Colors';
import IconButton from '@mui/material/IconButton';

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
  background-color: ${({ variant }) => variantMap[variant]};
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
  font-size: 1.25rem;
  font-weight: 900;
  margin-top: 0.75rem;
  margin-bottom: 0;
  color: ${colors.blue1};
`;

const EntryDate = styled.p`
  font-size: 0.75rem;
  margin: 0;
  color: ${colors.blue1};
`;

const Entry = styled.p`
  color: ${colors.blue1};
  font-size: 1.1rem;
`;

export {
  Masonry,
  EntryContainer,
  EntryName,
  EntryDate,
  Entry,
  FeelingBubble,
  MasonryContainer,
  IconButtonStyled,
};
