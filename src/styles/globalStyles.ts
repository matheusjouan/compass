import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @font-face {
        font-family: 'Mark Pro';
        font-style: normal;
        font-weight: 400;
        src: local('Mark Pro'), url('../fonts/MARKPRO.woff') format('woff');

        font-family: 'Mark Pro Bold';
        font-style: bold;
        font-weight: 700;
        src: local('Mark Pro Bold'), url('../fonts/MARKPROBOLD.woff') format('woff');
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root {
    min-width: 100%;
  }

  body {
    color: #E0E0E0;
    font-family: 'Mark Pro', sans-serif;
  }

  body, input, button {
    font-family: 'Mark Pro', sans-serif;
    font-size: 16px;
    color: #e0e0e0;
  }

  button {
    cursor: pointer
  }
`;
