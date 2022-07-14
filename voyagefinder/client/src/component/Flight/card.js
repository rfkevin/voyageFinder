import React from "react";
import { createReservations } from "../Attraction/slices/reservatioslice";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Grid, Typography, Box, Rating, Button } from "@mui/material";
import { reservationPlaning  } from '../Calendar/CalendarSlice';
import { useNavigate } from "react-router-dom";
import {
  AccessTime,
  AirplanemodeActive,
  AirlineStops,
} from "@mui/icons-material";
import useStyles from "./style";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const date = useSelector((state) => state.date);
  const user = useSelector((state) => state.user);
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
            onClick={async () => {
              await dispatch(
                createReservations({
                  id: user.result.email,
                  type: "Flight",
                  num: data.compagnie,
                  etablissment: data.compagnie,
                  confirmation: false,
                  date: date,
                })
              );
              const dates = new Date(date);
              let formatedDate = null;
              let formatedEndDate = null;
              const endDate = new Date(
                dates.getTime() + data.temps * 60 * 1000
              );
              formatedDate = dates.toISOString();
              formatedEndDate = endDate.toISOString();
              const datas = {
                id: user.result.email,
                planing: {
                  StartTime: formatedDate,
                  EndTime: formatedEndDate,
                  Subject: data.compagnie,
                  IsAllDay: false,
                  Description: "Travel"
                },
              };
              await dispatch(reservationPlaning(datas));
              navigate("/myplaning");
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
