import styled, { css } from 'styled-components';
import Masonry from '@mui/lab/Masonry';
import colors from '../../constants/Colors';

const variantMap = {
  happy: colors.red1,
  low: colors.green600,
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
  Entry,
  FeelingBubble,
  MasonryContainer,
};
