import React from "react";

import './styles.css';

import Header from '../../components/Header';
import Divider from '@material-ui/core/Divider';
import BoxAdoptUs from '../../components/BoxAdoptUs';
import ImgMediaCard from '../../components/Cards';

import dogImg from '../../assets/img-dog.svg';
import birdImg from '../../assets/img-bird.svg';
import catImg from '../../assets/img-cat.svg';
import hamsterImg from '../../assets/img-hamster.svg';

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Divider />
      <main className="container">
        <BoxAdoptUs />
        <section class="categorias">
          <h2>Categorias</h2>
          <div class="cards">
              <div class="item_cards dog">
                  <img src={dogImg} alt="Cachorro" />
                  <h3 class="descricao">Cachorros</h3>
              </div>
              <div class="item_cards cat">
                  <img src={catImg} alt="Gato" />
                <h3 class="descricao">Gatos</h3>
              </div>
              <div class="item_cards bird">
                  <img src={birdImg} alt="Passaros" />
                  <h3 class="descricao">Pássaros</h3>
              </div>
              <div class="item_cards other">
                  <img src={hamsterImg} alt="Outros" />
                  <h3 class="descricao">Outros</h3>
              </div>
          </div>
        </section>

        <section class="informacoes">
          <h2>Por que adotar?</h2>
          <div class="infocomponentes">
              <p class="primeiro-texto">
                  Adotar é sempre um gesto de muito amor e carinho pois, além de proporcionar um novo lar para o pet,
                  você ganhará um novo amigo que será sempre grato e um fiel companheiro.
              </p>
              <p class="segundo-texto">
                  Adotar é um ato consciente e abandonar é crime. Não adote por impulso, adote por amor!
              </p>
              <img src="img/adopt.svg" alt="" />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;
