import React from "react";
import List from "@material-ui/core/List";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Pokemons from "./PokemonList";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import IconButton from "@material-ui/core/IconButton";

const PokeDrawer = ({
  open,
  drawerClass,
  drawerPaper,
  drawerHeader,
  handleDrawer,
  direction,
}) => {
  return (
    <Drawer
      className={drawerClass}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: drawerPaper,
      }}
    >
      <div className={drawerHeader}>
        <IconButton onClick={handleDrawer}>
          {direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <Pokemons />
      </List>
    </Drawer>
  );
};

export default PokeDrawer;
