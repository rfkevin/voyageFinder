import React from "react";
import {
  Paper,
  Container,
  Grid,
  Typography,
  Box,
  Rating,
  Button,
} from "@mui/material";
import {
  AccessTime,
  AirplanemodeActive,
  AirplanemodeInactive,
  AirlineStops,
  ContactMail
} from "@mui/icons-material";
import useStyles from "./style";

const Card = () => {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Paper elevation={4}>
        <Typography variant="h6" align="center">
          Compagnie
        </Typography>
        <img
          src="https://www.revolution-energetique.com/wp-content/uploads/2021/03/Airbus-ZEROe-768x511.jpg"
          alt=""
          className={classes.media}
        />
        <Typography variant="body2" marginLeft={1} align="left">
          origin - destination
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
            depart
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
          <Typography variant="body2" marginLeft={0.5} align="right">
            flight time
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
            stop
          </Typography>
        </Box>
        <Box
          paddingX={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ContactMail />
          <Typography variant="body2" marginLeft={0.5} align="right">
            contact
          </Typography>
        </Box>
        <Box
          paddingX={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating name="read-only" value={3.75} precision={0.25} />
          <Typography variant="body2" marginLeft={0.5} align="right">
            score
          </Typography>
        </Box>
        <Typography variant="h6" align="center">
          Prix
        </Typography>
        <Box textAlign="center">
          <Button  color="primary" onClick={() => {}}>
            reservation
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Card;
