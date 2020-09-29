import React from "react";

import './styles.css';

import HeaderWithSubHeader from '../../components/HeaderWithSubHeader';
import Card from '../../components/Cards';

function Home() {
  return (
    <React.Fragment>
      <HeaderWithSubHeader />
      <main className="container">
        <Card />
      </main>
    </React.Fragment>
  );
}

export default Home;
