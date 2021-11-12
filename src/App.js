import React from "react";
import { ThemeProvider } from 'styled-components'

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";

import { lightTheme } from './Components/ui/themes'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
