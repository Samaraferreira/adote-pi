import React, { useContext } from 'react';

import { ModalContext } from '../../App';

import './styles.css';

import HeaderWithX from '../HeaderWithX';

import mapa from './mapa.JPG';
import iwhatsapp from './icon-whatsapp.svg';

function ModalMap() {
  const { openMapModal, setOpenMapModal, selectedPet } = useContext(ModalContext);

  return (
    <div className={`janelaModal ${openMapModal && 'modal-map-active' } `}>
      <HeaderWithX close={setOpenMapModal} />
      <div className="info">
        <h1>Localização do pet <span className="nomePet">{selectedPet.name}</span></h1>
        <img className="maps"  src={mapa} alt="mapa" />
        <button className="btn">
          <img src={iwhatsapp} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </div>
    </div>
  );
}

export default ModalMap;
