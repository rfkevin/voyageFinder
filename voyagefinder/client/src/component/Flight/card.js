import React from "react";
import { createReservations } from "../Attraction/slices/reservatioslice";
import { useDispatch, useSelector } from "react-redux";
import {
  Paper,
  Grid,
  Typography,
  Box,
  Rating,
  Button,
} from "@mui/material";
import {
  AccessTime,
  AirplanemodeActive,
  AirlineStops,
} from "@mui/icons-material";
import useStyles from "./style";

const Card = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const date = useSelector((state) => state.date);
  return (
    <Grid item xs={4}>
      <Paper elevation={4}>
        <Typography variant="h6" align="center">
          {data.compagnie}
        </Typography>
        <img src={data.img} alt="" className={classes.media} />
        <Typography variant="body2" marginLeft={1} align="left">
          {data.origin + " - " + data.destination}
        </Typography>
        <Box
          paddingX={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AirplanemodeActive />

          <Typography variant="body2" marginLeft={0.5} align="left">
            {data.depart}
          </Typography>
        </Box>
        <Box
          paddingX={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AccessTime />
          <Typography variant="body2" marginLeft={0.5}>
            {data.temps}
          </Typography>
        </Box>
        <Box
          paddingX={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AirlineStops />
          <Typography variant="body2" marginLeft={0.5} align="right">
            {data.stop}
          </Typography>
        </Box>
        <Box
          paddingX={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="read-only"
            value={data.score}
            precision={0.25}
            size="small"
          />
        </Box>
        <Typography variant="h6" align="center">
          {data.price}
        </Typography>
        <Box textAlign="center">
          <Button
            color="primary"
            onClick={() => {
              dispatch(
                createReservations({
                  id: "test1",
                  type: "Flight",
                  num: data.compagnie,
                  etablissment: data.compagnie,
                  confirmation: false,
                  date: date,
                })
              );
            }}
          >
            reservation
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Card;
