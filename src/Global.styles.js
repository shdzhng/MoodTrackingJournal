import { createGlobalStyle } from 'styled-components';
import colors from './constants/Colors';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    padding: 0px;
    margin: 0px;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.background};
};
#map {
  width:75vw;
  height: 75vh;
  margin: 2rem auto;
  border: 2px solid ${colors.accent};
  };
`;

export default GlobalStyle;
