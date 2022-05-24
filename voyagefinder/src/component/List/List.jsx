import React, { useState, useEffect, createRef } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import useStyles from "./style";

const List = ({ places, child, isLoading, type, setType, rating, setRating }) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_ , i) => elRefs[i] || createRef());
    setElRefs(refs);
    console.log({elRefs});
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h5"> Restaurant, Hotels & Attraction </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5em" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>type </InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants"> Restaurants </MenuItem>
              <MenuItem value="hotels"> Hotels </MenuItem>
              <MenuItem value="attractions"> Attraction </MenuItem>>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating </InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}> All </MenuItem>
              <MenuItem value={2}> Above 2.0 </MenuItem>
              <MenuItem value={3}> Above 3.0</MenuItem>
              <MenuItem value={4.5}> Above 4.5 </MenuItem>>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref = {elRefs[i]} item key={i} xs={12}>
                <PlaceDetails
                  place={place}
                  selected={Number(child) === i}
                  refProp={elRefs[i]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
