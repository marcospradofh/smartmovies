import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
  }
  body{
      font-size: 100%;
      list-style-type: none;
      font-family: 'Lato', sans-serif;
      background: #EEEEEE;
      color: #0A100D;
  }
`;

export default GlobalStyle;
