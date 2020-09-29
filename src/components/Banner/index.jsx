import React from 'react';

import './styles.css';
import bannerImg from '../../assets/img-banner.svg';

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h1>Encontre um amigo verdadeiro</h1>
        <span>para compartilhar os melhores momentos</span>
      </div>
      <img src={bannerImg} alt="Adote"/>
    </div>
  );
}

export default Banner;
