import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    background-color: #fcfcfc;
    min-height: 100%;
    min-width: 100%;
  }


  hr {
    max-width: 80%;
  }

`;
