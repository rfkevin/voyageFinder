import React, { useEffect } from "react";
import { Grid, Container } from "@mui/material";
import Search from "./search";
import Navbar from "../Navbar/Navbar";
import Card from "./card";
import useStyles from "./style";
import { getFlightList,  dataFormating } from './flightSlice';
import { useDispatch, useSelector } from "react-redux";
import { prototype  } from './prototype';
const Flight = () => {
  const dispatch = useDispatch();

  useEffect(() => {
     dataFormating(prototype);
  //  try{
      //dispatch(getFlightList({origin: 'MUC', destination:'BER',dateResv:'2022-06-18'}));
  //}catch(e){
    //console.log(e)
  //}
}, []);
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className = {classes.maincard}>
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={12} md={3}>
          <Search />
        </Grid>
        <Grid container   item xs={12} md={9} spacing={5} >
              <Card />
              <Card />
              <Card />
        </Grid>
      </Grid>
      </div>
    </>
  );
};

export default Flight;
