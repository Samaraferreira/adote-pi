import React, { useContext } from 'react';

import { ModalContext } from '../../App';

import './styles.css';

import HeaderWithX from '../HeaderWithX';

import mapa from './mapa.JPG';
import iwhatsapp from './icon-whatsapp.svg';

function ModalMap({ pet }) {
  const { openMapModal, setOpenMapModal, selectedPet } = useContext(ModalContext);

  let nomepet = 'Lucky';

  return (
    <div className={`janelaModal ${openMapModal && 'modal-map-active' } `}>
      <HeaderWithX close={setOpenMapModal} />
      <div className="info">
        <h1>Localização do pet <span className="nomePet">{selectedPet.name}</span></h1>
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
