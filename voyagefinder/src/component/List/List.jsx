import React, { useState } from "react";
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

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState("");
  const places = [
    { name: "cool places" },
    { name: "beer" },
    { name: "steak" },
    { name: "cool places" },
    { name: "beer" },
    { name: "steak" },
  ];
  return (
    <div className={classes.container}>
      <Typography variant="h5"> Restaurant, Hotels & Attraction </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>type </InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="Restaurants"> Restaurants </MenuItem>
          <MenuItem value="Hotels"> Hotels </MenuItem>
          <MenuItem value="Attraction"> Attraction </MenuItem>>
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
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
