import React, { useContext, useState, useReducer } from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import Search from "../../components/Search/Search";
import { Cart } from "../../ContextApi";
import axios from "axios";
import { actionTypes } from "../../reducers/ActionTypes";
import { imagesObj } from "../../assets/imagesObj";
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";


const useStyles = makeStyles({
  toolbar: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "Center",
  },

  card: {
    width: "70%",
    height: "30rem",
    padding: "0rem 2rem",
    background: "linear-gradient(to right, #a8ff78, #78ffd6)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    justifyContent: "center",
  },
  textField: {
    width: "100%",
  },
  img: {
    height: "150px",
    width: "150px",
  },
  humidWindSpeed: {
    display: "flex",
    gap: "4rem",
    alignItems:"center",
    justifyContent:"center"
  },

  svg:{
    height: "100px",
    width: "50px",
  },
  humidityText:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-around"
  },
  icons:{
    display: "flex",
    gap: "1rem",
    alignItems:"center",
    justifyContent:"center"
  }
});

const WhetherDisplay = () => {
  const { state, dispatch } = useContext(Cart);
  const classes = useStyles();

  let renderDisplayComp = (
    <>
      <img src={imagesObj[state?.mainCondition]} className={classes.img} />
      <h2>{Math.floor(state?.temp - 273)}°C</h2>
      <h3>{state?.cityName}</h3>
      <section className={classes.humidWindSpeed}>
        <div className={classes.icons}>
      <WiHumidity className={classes.svg}/>
        <div className={classes.humidityText}>
          <h3>humidity</h3>
          <p>{state.humidity}</p>
        </div>
        </div>
        <div className={classes.icons}>
       <FaWind className={classes.svg}/>
        <div className={classes.humidityText}>
          <h3>wind Speed</h3>
          <p>{state.windSpeed}</p>
        </div>
        </div>
      </section>
    </>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">Whether App</Typography>
        </Toolbar>
      </AppBar>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Search />
{state.mainCondition && (
          renderDisplayComp
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default WhetherDisplay;
