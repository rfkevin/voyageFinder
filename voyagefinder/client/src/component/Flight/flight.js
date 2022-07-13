import React , {useEffect} from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import Search from "./search";
import Navbar from "../Navbar/Navbar";
import Card from "./card";
import useStyles from "./style";
import { useSelector } from "react-redux";
const Flight = () => {
  const flight = useSelector((state) => state.flight.data);
  const isloading = useSelector((state) => state.flight.isLoading);
useEffect(() => {

 }, [ flight]);
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
