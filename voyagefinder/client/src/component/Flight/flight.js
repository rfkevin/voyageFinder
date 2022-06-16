import React from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import Search from "./search";
import Navbar from "../Navbar/Navbar";
import Card from "./card";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
const Flight = () => {
  const flight = useSelector((state) => state.flight.data);
  const isloading = useSelector((state) => state.flight.isLoading);
//  useEffect(() => {
    //  try{
    //dispatch(getFlightList({origin: 'MUC', destination:'BER',dateResv:'2022-06-18'}));
    //}catch(e){
//    const test = darinoDataFormating(darinoPrototype);
//    console.log(test)
    //}
//  }, [dispatch]);
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.maincard}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Search />
          </Grid>
          <Grid container item xs={12} md={8} spacing={5} >
            {isloading ? (
              <div className={classes.loading}>
                <Grid item>
                  <CircularProgress size="7em" />
                </Grid>
              </div>
            ) : (
              Object.entries(flight)?.map(([id, datas]) => (
                <>
                  <Typography variant="h4" align="center" width = "100%">{id}</Typography>
                  <Grid container item xs={12}  spacing={2} min-width= {250}>
                    {datas?.map((data) => (
                      <Card data={data} />
                    ))}
                  </Grid>
                </>
              ))
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Flight;
