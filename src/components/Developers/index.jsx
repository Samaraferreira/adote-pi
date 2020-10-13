import React from 'react';

import './styles.css';

import linkedin from '../../assets/icons/icon-linkedin.svg';
import github from '../../assets/icons/icon-github.svg';
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
                  <a href="https://github.com/angelicaacevedo" target="_blanck"><img src={github} alt="GitHub" /></a>
                  <a href="https://www.linkedin.com/in/angelicaaceroacevedo/" target="_blanck"><img src={linkedin} alt="LinkedIn" /></a>
              </div>
          </div>
          <div className="cardDev">
              <img src={arthur} alt=""/>
              <h3>Arthur</h3>
              <div className="redes">
                  <a href="https://github.com/arthfgp" target="_blanck"><img src={github} alt="GitHub" /></a>
                  <a href="https://www.linkedin.com/in/arthur-fernando" target="_blanck"><img src={linkedin} alt="LinkedIn" /></a>
              </div>
          </div>
          <div className="cardDev">
              <img src={leo} alt=""/>
              <h3>Leonardo</h3>
              <div className="redes">
                  <a href="https://github.com/leorjr" target="_blanck"><img src={github} alt="GitHub" /></a>
                  <a href="https://www.linkedin.com/in/leonardo-rodrigues-656ba5111" target="_blanck"><img src={linkedin} alt="LinkedIn" /></a>
              </div>
          </div>
          <div className="cardDev">
              <img src={samara} alt=""/>
              <h3>Samara</h3>
              <div className="redes">
                  <a href="https://github.com/Samaraferreira" target="_blanck"><img src={github} alt="GitHub" /></a>
                  <a href="https://www.linkedin.com/in/samarafer" target="_blanck"><img src={linkedin} alt="LinkedIn" /></a>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Devs;
