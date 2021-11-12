import React from "react";
import { ThemeProvider } from 'styled-components'

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeButton } from "./Components/ui";
import { ThemeSwitcher } from './Components/ThemeSwitcher'

import { lightTheme, darkTheme } from './Components/ui/themes'

function App() {
  const [isThemeLight, setIsThemeLight] = React.useState(true)

  const toggleTheme = React.useCallback(() => {
    setIsThemeLight(state => !state)
  }, [])

  return (
    <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <GlobalStyle />

      <ThemeButton onClick={toggleTheme}>
        <ThemeSwitcher isThemeOn={isThemeLight}/>
      </ThemeButton>

      <Cabecalho />
      <Container />

    </ThemeProvider>
  );
}

export default App;
