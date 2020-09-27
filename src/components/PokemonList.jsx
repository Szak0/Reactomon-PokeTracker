import axios from "./util/axios";
import PokemonItem from "./PokemonItem";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Pokemons = () => {
  const [characters, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pokesPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios(
        `/pokemon?offset=${currentPage}&limit=${pokesPerPage}`
      );
      const data = response.data.results;
      setPokemons(data);
    };
    fetchData();
    setLoading(false);
  }, [currentPage, pokesPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div>
        <Pagination currentPage={currentPage} paginate={paginate} />
      </div>
      <section className="poke-container">
        {characters.map((item) => (
          <PokemonItem key={item.name} item={item} />
        ))}
      </section>
      <div>
        <Pagination currentPage={currentPage} paginate={paginate} />
      </div>
    </div>
  );
};

export default Pokemons;
