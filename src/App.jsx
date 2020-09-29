import React, { useState, createContext } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import './App.css';

import Home from './pages/Home';
import ListPets from './pages/ListPets';

import Modal from './components/Modal';

export const ModalContext = createContext()

function App() {
  const [openModal, setOpenModal] = useState(false);

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
      <ModalContext.Provider value={{ openModal, setOpenModal }}>
        <Modal />
         <Home />
        {/* <ListPets /> */}
      </ModalContext.Provider>
    </ThemeProvider>
  );
}

export default App;
