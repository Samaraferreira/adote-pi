import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import './styles.css';

import HeaderWithSubHeader from '../../components/HeaderWithSubHeader';
import Card from '../../components/Cards';
import { getPetsByCategory } from "../../services/api";

function ListPets({ category }) {
  const [pets, setPets] = useState([]);
  // const [category, setCategory] = useState('');
  // const query = useQuery();

  // function useQuery() {
  //   return new URLSearchParams(useLocation().search);
  // }

  useEffect(() => {
    async function loadPets() {
      // const category = query.get("category");
      const data = await getPetsByCategory(category);
      console.log(data)
      setPets(data);
    }

    loadPets();
  }, [category]);

  return (
    <React.Fragment>
      <HeaderWithSubHeader />
      <main className="container">
        <Card pets={pets} />
      </main>
    </React.Fragment>
  );
}

export default ListPets;
