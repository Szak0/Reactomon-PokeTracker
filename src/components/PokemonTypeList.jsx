import axios from "./util/axios";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: "theme.palette.text.primary",
    fontSize: "3rem",
    maxWidth: "220px",
    marginBottom: "1rem",
  },
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
  },
}));

const TypeList = () => {
  const classes = useStyles();

  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios(`type`);
      const data = response.data.results;
      console.log(data);
      setTypes(data);
    };
    fetchData();
    setLoading(false);
  }, []);
  return (
    <div className={classes.container}>
      {types.map((item) => (
        <React.Fragment>
          <Paper className={classes.paper}>{item.name}</Paper>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TypeList;
