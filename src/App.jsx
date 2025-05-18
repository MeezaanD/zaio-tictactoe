import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './theme/theme';
import { useTheme } from './context/ThemeContext';
import { GameProvider } from './context/GameContext';
import Home from './pages/Home';
import Game from './pages/Game';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <GameProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Router>
      </GameProvider>
    </ThemeProvider>
  );
}

export default App;
