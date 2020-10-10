import React from 'react';
import './Developers.css';
import logo from './logo.svg';
import linkedin from './linkedin.png';
import github from './github-logo.png';
import leo from './Leo.png';
import arthur from './Arthur.png';
import samara from './Samara.png';
import angelica from './Angelica.png';

import coracao from './coracao.png'

function Devs() {
  return (
    <div className="tela">
        <div className="header">
            <img src={logo} alt=""/>
            <button>Quero Doar</button>
        </div>
        <div className="telaDevs">
            <h2>Desenvolvedores</h2>
            <div className="devs">
                <div className="cardDev">
                    <img src={angelica} alt=""/>
                    <h3>Angelica</h3>
                    <div className="redes">
                        <a href="#"><img src={github} alt="" /></a>
                        <a href="#"><img src={linkedin} alt="" /></a>
                    </div>
                </div>
                <div className="cardDev">
                    <img src={arthur} alt=""/>
                    <h3>Arthur</h3>
                    <div className="redes">
                        <a href="#"><img src={github} alt="" /></a>
                        <a href="#"><img src={linkedin} alt="" /></a>
                    </div>
                </div>
                <div className="cardDev">
                    <img src={leo} alt=""/>
                    <h3>Leonardo</h3>
                    <div className="redes">
                        <a href="#"><img src={github} alt="" /></a>
                        <a href="#"><img src={linkedin} alt="" /></a>
                    </div>
                </div>
                <div className="cardDev">
                    <img src={samara} alt=""/>
                    <h3>Samara</h3>
                    <div className="redes">
                        <a href="#"><img src={github} alt="" /></a>
                        <a href="#"><img src={linkedin} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="linha">

            </div>
            <div className="ftexto">
                <p>Feito com</p>
                <img src={coracao}/>
            </div>
        </div>
        
    </div>
  );
}

export default Devs;