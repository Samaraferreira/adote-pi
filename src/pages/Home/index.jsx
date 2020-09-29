import React from "react";

import './styles.css';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Divider from '@material-ui/core/Divider';
import BoxAdoptUs from '../../components/BoxAdoptUs';
import ImgMediaCard from '../../components/Cards';
import HeaderWithX from '../../components/HeaderWithX';

import dogImg from '../../assets/img-dog.svg';
import birdImg from '../../assets/img-bird.svg';
import catImg from '../../assets/img-cat.svg';
import hamsterImg from '../../assets/img-hamster.svg';
import adoptImg from '../../assets/adopt.svg';

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Divider />
      <main className="container">
        {/* <BoxAdoptUs /> */}
        <Banner />
        <section className="categorias">
          <h2 className="title">Categorias</h2>
          <div className="cards">
              <div className="item_cards dog">
                  <img src={dogImg} alt="Cachorro" />
                  <h3 className="descricao">Cachorros</h3>
              </div>
              <div className="item_cards cat">
                  <img src={catImg} alt="Gato" />
                <h3 className="descricao">Gatos</h3>
              </div>
              <div className="item_cards bird">
                  <img src={birdImg} alt="Passaros" />
                  <h3 className="descricao">Pássaros</h3>
              </div>
              <div className="item_cards other">
                  <img src={hamsterImg} alt="Outros" />
                  <h3 className="descricao">Outros</h3>
              </div>
          </div>
        </section>
        <section className="infos">
          <h2 className="title">Por que adotar?</h2>
          <div className="infos-content">
            <div>
              <p className="primeiro-texto">
                Adotar é sempre um gesto de muito amor e carinho pois, além de proporcionar um novo lar para o pet,
                você ganhará um novo amigo que será sempre grato e um fiel companheiro.
              </p>
              <p className="segundo-texto">
                Adotar é um ato consciente e abandonar é crime. Não adote por impulso, adote por amor!
              </p>
            </div>
            <img src={adoptImg} alt="Adote" />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;
