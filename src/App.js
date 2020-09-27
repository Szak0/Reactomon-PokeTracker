import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Types from "./components/PokemonTypeList";
import Pokemons from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PokeDrawer from "./components/PokeDrawer";
import NavBar from "./components/Navbar";

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
    <React.Fragment>
      <BrowserRouter>
        <div className="app_">
          <CssBaseline />

          <NavBar
            open={open}
            appBarClass={classes.appBar}
            appBarShiftClass={classes.appBarShift}
            titleClass={classes.title}
            openDrawer={handleDrawerOpen}
            hideClass={classes.hide}
          />

          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <Box my={2}>
              <Switch>
                <Route path={"/"} exact={true} component={Pokemons} />
                <Route path={"/pokemons"} component={Pokemons} />
                <Route path="/types" component={Types} />
                <Route path="/pokemon/:id">
                  <PokemonDetail />
                </Route>
              </Switch>
            </Box>
          </main>

          <PokeDrawer
            open={open}
            drawerClass={classes.drawer}
            drawerPaper={classes.drawerPaper}
            drawerHeader={classes.drawerHeader}
            handleDrawer={handleDrawerClose}
            direction={theme.direction}
          />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
