import React, { useEffect, useState } from "react";
import axios from "./util/axios";
import { useParams } from "react-router-dom";
import Chart from "./StatChart";
import Type from "./Type";

const PokemonDetail = (info) => {
  const { id } = useParams();
  const url = "https://pokeapi.co/api/v2/pokemon/" + id;

  const [data, setData] = useState([]);
  const [hp, setHp] = useState([]);
  const [attack, setAttack] = useState([]);
  const [defense, setDefense] = useState([]);
  const [sAttack, setSattack] = useState([]);
  const [sDefense, setSdefense] = useState([]);
  const [speed, setSpeed] = useState([]);
  const [sprite, setSprite] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios(url);
      setData(request.data);
      setHp(request.data.stats[0].base_stat);
      setAttack(request.data.stats[1].base_stat);
      setDefense(request.data.stats[2].base_stat);
      setSattack(request.data.stats[3].base_stat);
      setSdefense(request.data.stats[4].base_stat);
      setSpeed(request.data.stats[5].base_stat);
      setSprite(request.data.sprites.front_shiny);
      setTypes(request.data.types);
      return request;
    };
    fetchData();
  }, [url]);

  return (
    <section className="section pokedex-pokemon-details">
      <h1 className="poke-title">
        {data.name} #{data.id}
      </h1>
      <div className="pokemon-profile-pics">
        <img className="poke-img" src={sprite} alt={data.name} />
      </div>
      <Type types={types} />
      <Chart
        hp={hp}
        attack={attack}
        defense={defense}
        sAttack={sAttack}
        sDefense={sDefense}
        speed={speed}
      />
    </section>
  );
};

export default PokemonDetail;
