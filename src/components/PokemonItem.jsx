import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PokemonItem = ({ item }) => {
  const [imagesFront, setImages] = useState([]);
  const [imagesBack, setImagesBack] = useState([]);
  const [ids, setIds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const request = await axios(item.url);
      setImages(request.data.sprites.front_default);
      setImagesBack(request.data.sprites.back_default);
      setIds(request.data.id);
    };
    fetchData();
    setLoading(false);
  }, [item.url]);
  if (loading) {
    return null;
  } else
    return (
      <div>
        <Link to={"/pokemon/" + ids}>
          <div key={item.name} className="poke-card">
            <div className="poke-card-inner">
              <div className="poke-card-front">
                <img
                  src={imagesFront}
                  alt={item.name}
                  className="poke-img"
                ></img>
                <h1 className="poke-card-title">{item.name}</h1>
              </div>
              <div className="poke-card-back">
                <img
                  src={imagesBack}
                  alt={item.name}
                  className="poke-img"
                ></img>
                <h1 className="poke-card-title">{item.name}</h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default PokemonItem;
