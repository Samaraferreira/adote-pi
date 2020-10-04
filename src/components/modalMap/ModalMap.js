import React from 'react';
import './ModalMap.css';
import logo from '../modalMap/logo.svg';
import fechar from '../modalMap/icon-close.svg';
import mapa from '../modalMap/mapa.JPG';
import iwhatsapp from '../modalMap/icon-whatsapp.svg';

function ModalMap() {

    let nomepet = 'Lucky';

    return (
      <div className="janelaModal">

          <div className="Header">
            <img id="logo" src={logo} />
            <img id="fechar" src={fechar} />
          </div>

          <div className="Info">
            <h1>Localização do pet <span className="nomePet">{nomepet}</span></h1>
            <img src={mapa} />
          </div>

          <div className="Botao">              
            <img src={iwhatsapp} />
            <p>Entrar em Contato</p>
          </div>

      </div>
    );
  }
  
  export default ModalMap;