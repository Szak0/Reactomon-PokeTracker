import React from "react";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({
  open,
  appBarClass,
  appBarShiftClass,
  titleClass,
  openDrawer,
  hideClass,
}) => {
  return (
    <AppBar
      position="fixed"
      className={clsx(appBarClass, {
        [appBarShiftClass]: open,
      })}
    >
      <Toolbar>
        <Typography variant="h6" noWrap className={titleClass}>
          <Link to="/">
            <Navbar.Brand className="poke-bar-text">React0mon</Navbar.Brand>
          </Link>
        </Typography>
        <Nav className="mr-auto">
          <Link to="/pokemons">
            <Navbar.Text className="poke-bar-text">Pokemons</Navbar.Text>
          </Link>
          <Link to="/types">
            <Navbar.Text className="poke-bar-text">Types</Navbar.Text>
          </Link>
        </Nav>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={openDrawer}
          className={clsx(open && hideClass)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
