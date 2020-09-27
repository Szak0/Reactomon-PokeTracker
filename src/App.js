import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Navbar';
import Types from './components/PokemonTypeList';
import Pokemons from './components/PokemonList';
import axios from './components/util/axios';
import PokemonDetail from './components/PokemonDetail'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="app__">
        <Header />
        <div className='app-container'>
          <Switch>
            <Route path={'/'} exact={true} component={() => <Pokemons items={characters} />} />
            <Route path={'/pokemons'} component={() => <Pokemons items={characters} />} />
            <Route path='/types' component={Types} />
            <Route path="/pokemon/:id" component={PokemonDetail} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
