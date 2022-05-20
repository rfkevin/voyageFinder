import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style";

const Map = () => {

  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");
  const coordinate = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAJRu7Ze6Dyah870MS5Xs6veGYnr75tKFk" }}
        defaultCentre={coordinate}
        center={coordinate}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      >

      </GoogleMapReact>
    </div>
  );
};

export default Map;
