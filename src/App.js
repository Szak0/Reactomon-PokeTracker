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
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='app-container'>
          <Switch>
            <Route path={'/'} exact component={() => <Pokemons items={characters} />} />
            <Route path={'/pokemons'} component={() => <Pokemons items={characters} />} />
            <Route path='/types' component={Types} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
