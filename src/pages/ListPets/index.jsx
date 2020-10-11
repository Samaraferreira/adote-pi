import React, { useEffect, useState } from "react";

import './styles.css';

import HeaderWithSubHeader from '../../components/HeaderWithSubHeader';
import Card from '../../components/Cards';
import { getPetsByCategory } from "../../services/api";

function ListPets({ category }) {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPets() {
      setLoading(true);
      const data = await getPetsByCategory(category);

      setPets(data);
      setLoading(false);
    }

    loadPets();
  }, [category]);

  return (
    <React.Fragment>
      <HeaderWithSubHeader />
      <main className="container">
        <Card pets={pets} loading={loading} />
      </main>
    </React.Fragment>
  );
}

export default ListPets;
