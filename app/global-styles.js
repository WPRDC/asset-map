import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    max-height: 100%;
    height: 100%;
    width: 100%;
    display: flex;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    min-height: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  .mapboxgl-popup, .mapboxgl-popup-content {
    background: transparent;
  }


  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
