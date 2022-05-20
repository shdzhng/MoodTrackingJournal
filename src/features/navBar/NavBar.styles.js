import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../constants/Colors';

const StyledLinkWhite = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;
const StyledLinkBlack = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;

export { StyledLinkWhite, StyledLinkBlack };
