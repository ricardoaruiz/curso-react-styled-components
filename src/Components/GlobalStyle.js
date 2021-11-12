import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      font-family: "Montserrat", sans-serif;
      margin: 0;
      padding: 0;
      text-decoration: none;
      color: ${theme.text};
    }  
  `};
`