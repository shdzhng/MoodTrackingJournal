import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    padding: 0px;
    margin: 0px;
    width: 100vw;
    height: 100vh;
    position:relative;
    background-color: ${colors.background};
};

#input{
  z-index: 99999;
}

 .pac-container {
    z-index: 20;
}
.modal{
    z-index: 0 !important;
}
.modal-backdrop{
    z-index: 10;
}

#map {
  width:75vw;
  height: 75vh;
  margin: 2rem auto;
  border: 2px solid ${colors.accent};
  };

.relativeContainer{
  position: relative;
}

.greenhighlight{
  color:green;
  font-weight: 500;
  font-size: 1rem;
text-decoration: underline;
}

.redhighlight{
  color:red;
   font-weight: 500;
     font-size: 1rem;
text-decoration: underline;
}

`;

export default GlobalStyle;
