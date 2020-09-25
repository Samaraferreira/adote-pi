import React from 'react';

import './App.css';

import Home from './pages/Home';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';


function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#49B7C6'
      },
      secondary: {
        main: '#49B7C6'
      },
      textColor: {
        main: '#FFFFFF',
        secundario: '#FFFFFF'
      }
    },
  });
  return (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
  );
}

export default App;
