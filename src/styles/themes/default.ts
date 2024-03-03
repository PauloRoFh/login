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

  @media (min-width: 1120px) {
    main {
      flex-direction: row;
      max-width: fit-content;
      gap: 16rem;
      padding: 9rem 6rem;
    }
  }
  
  body {
    background: ;
    color: ;
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Karla', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`