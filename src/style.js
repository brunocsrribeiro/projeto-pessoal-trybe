import { createGlobalStyle } from 'styled-components';

import imageCosmos from './images/cosmos.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background: url(${imageCosmos}) center no-repeat;
    background-size: cover;
    font-family: 'Water Brush', cursive;
    color: #fff;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
