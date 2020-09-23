import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Navbar';
import Types from './components/PokemonTypeList';
import Pokemons from './components/PokemonList';
import axios from './components/util/axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



const App = () => {

  const [characters, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios();
      setPokemons(request.data.results);
      return request;
    }
    fetchData();
  }, [])





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
