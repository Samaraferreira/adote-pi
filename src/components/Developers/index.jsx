import React from 'react';

import './styles.css';

import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github-logo.png';
import leo from '../../assets/Leo.png';
import arthur from '../../assets/Arthur.png';
import samara from '../../assets/Samara.png';
import angelica from '../../assets/Angelica.png';

function Devs() {
  return (
    <section className="container-devs">
      <h2 className="title">Desenvolvedores</h2>
      <div className="devs">
          <div className="cardDev">
              <img src={angelica} alt=""/>
              <h3>Angelica</h3>
              <div className="redes">
                  <a href="#" target="blanck"><img src={github} alt="" /></a>
                  <a href="#" target="blanck"><img src={linkedin} alt="" /></a>
              </div>
          </div>
          <div className="cardDev">
              <img src={arthur} alt=""/>
              <h3>Arthur</h3>
              <div className="redes">
                  <a href="#" target="blanck"><img src={github} alt="" /></a>
                  <a href="#" target="blanck"><img src={linkedin} alt="" /></a>
              </div>
          </div>
          <div className="cardDev">
              <img src={leo} alt=""/>
              <h3>Leonardo</h3>
              <div className="redes">
                  <a href="#" target="blanck"><img src={github} alt="" /></a>
                  <a href="#" target="blanck"><img src={linkedin} alt="" /></a>
              </div>
          </div>
          <div className="cardDev">
              <img src={samara} alt=""/>
              <h3>Samara</h3>
              <div className="redes">
                  <a href="https://github.com/Samaraferreira" target="blanck"><img src={github} alt="" /></a>
                  <a href="www.linkedin.com/in/samarafer" target="blanck"><img src={linkedin} alt="" /></a>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Devs;
