import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    background: #000;
  }
  
  body, input, textarea, button {
    font-family: 'Karla', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`