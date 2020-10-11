import React from 'react';

import './styles.css';

import heart from '../../assets/icons/icon-heart.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="linha">
      </div>
      <div className="ftexto">
        <p>Feito com</p>
        <img src={heart}/>
      </div>
    </footer>
  );
}

export default Footer;
