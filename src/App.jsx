import React, { useState, createContext } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import './App.css';

import Home from './pages/Home';

import Modal from './components/Modal';
import ModalMap from './components/ModalMap';

export const ModalContext = createContext()

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openMapModal, setOpenMapModal] = useState(false);
  const [selectedPet, setSelectedPet] = useState({});

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
      <ModalContext.Provider value={{ openModal, setOpenModal, openMapModal, setOpenMapModal, selectedPet, setSelectedPet }}>
        <Modal />
        <ModalMap />
        <Home />
      </ModalContext.Provider>
    </ThemeProvider>
  );
}

export default App;
