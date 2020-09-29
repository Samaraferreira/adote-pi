import React, { useContext }  from 'react';
import { ModalContext } from '../../App';

import closeIcon from '../../assets/icons/icon-close.svg';

import './styles.css';

function Modal() {
  const { openModal, setOpenModal } = useContext(ModalContext);

  return (
    <section className={`modal-container ${openModal && 'modal-active' } `}>
      <header className="modal-header">
        <h2>Cadastrar novo pet</h2>
        <button onClick={() => setOpenModal(false)} className="btn-close">
          <img src={closeIcon} alt="fechar"/>
        </button>
      </header>
    </section>
  );
}

export default Modal;