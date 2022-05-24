import styled from '@emotion/styled';
import colors from '../../constants/Colors';

const InfoWindowText = styled.p`
  color: ${colors.blue1};
  overflow-wrap: break-all;
  word-wrap: break-all;
  -ms-word-break: break-all;
  word-break: break-all;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

const InfoWindowTitle = styled.p`
  color: ${colors.blue1};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  overflow-wrap: break-all;
  word-wrap: break-all;
  -ms-word-break: break-all;
  word-break: break-all;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

const InfoWindowDate = styled.p`
  margin: 0;
  color: ${colors.blue2};
`;

export { InfoWindowText, InfoWindowDate, InfoWindowTitle };
