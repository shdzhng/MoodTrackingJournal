import styled from '@emotion/styled';
import colors from '../../constants/Colors';

const InfoWindowText = styled.p`
  color: ${colors.blue1};
`;

const InfoWindowTitle = styled.p`
  color: ${colors.blue1};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const InfoWindowDate = styled.p`
  margin: 0;
  color: ${colors.blue2};
`;

export { InfoWindowText, InfoWindowDate, InfoWindowTitle };
