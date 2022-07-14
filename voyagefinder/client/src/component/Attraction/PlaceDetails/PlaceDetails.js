import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "./placeDetailsSlice";
import { createReservations } from "../slices/reservatioslice";
import { reservationPlaning } from "../../Calendar/CalendarSlice";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  TextField,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { DateTimePicker } from "@mui/lab";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style.js";

const PlaceDetails = ({ place, selected, refProp }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const date = useSelector((state) => state.date);
  const type = useSelector((state) => state.type);
  const navigate = useNavigate();
  const classes = useStyles();
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <Card evaluation={6}>
      <CardMedia
        style={{ height: 250 }}
        image={
          place.photo ? place.photo.images.large.url : "../Assets/noImage.webp"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant={"h5"}>
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
        <CardActions>
          <DateTimePicker
            label="Date Picker"
            renderInput={(params) => <TextField {...params} />}
            value={date}
            minDate={new Date()}
            onChange={(newvalue) => {
              dispatch(setDate(newvalue.toString()));
            }}
          />
        </CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(
              createReservations({
                id: user.result.email,
                type: type,
                num: place.phone,
                etablissment: place.name,
                confirmation: false,
                date: date,
              })
            );
            const dates = new Date(date);
            let formatedDate = null;
            let formatedEndDate = null;
            if (type === "hotels"){
              const endDate = new Date(dates.getTime() + 24 * 60 * 60 * 1000);
              formatedDate = new Date(dates.toDateString()).toISOString();
              formatedEndDate = new Date(endDate.toDateString()).toISOString();
            }else{
              const endDate = new Date(dates.getTime() + 60 * 60 * 1000);
              formatedDate = dates.toISOString();
              formatedEndDate = endDate.toISOString();
            }
            const data = {
              id: user.result.email,
              planing: {
                StartTime: formatedDate,
                EndTime: formatedEndDate,
                Subject: place.name,
                IsAllDay: false,
                Description: type,
              }
            };
            dispatch(reservationPlaning(data));
            navigate("/myplaning");
          }}
        >
          reservation
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
