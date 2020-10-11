import React from 'react';

import './styles.css';

import coracao from '../../assets/icons/coracao.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="linha">
      </div>
      <div className="ftexto">
        <p>Feito com</p>
        <img src={coracao}/>
      </div>
    </footer>
  );
}

export default Footer;
