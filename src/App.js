import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './app.scss';
import {
  light,
  dark,
} from "./components/styles/Theme.styled";
import { ThemeButton, ThemeContainer } from './components/styles/ThemeSwitching.styled';
import SearchCreate from './components/SearchCreate';
import { Body } from './components/styles/Body.styled';
import { TodoLogin, TodoLogo } from './components/styles/TodoLogo.styled';



const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(light);

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };
  return (

    <ThemeProvider theme={selectedTheme}>
      <Body className="app">
        <ThemeContainer>
          <TodoLogo>
            ✓Task Management
          </TodoLogo>
          <ThemeButton
            className={`light ${selectedTheme === light ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}>
            <LightModeIcon className='light' />
          </ThemeButton>
          <ThemeButton
            className={`dark ${selectedTheme === dark ? "active" : ""}`}
            onClick={() => HandleThemeChange(dark)}>
            <DarkModeIcon className='dark' />
          </ThemeButton>
          <TodoLogin>
            Login
          </TodoLogin>
        </ThemeContainer>
        <SearchCreate />
      </Body>
    </ThemeProvider>
  );
}

export default App;

