import React from "react";
import { Paper, Grid, Container, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import useStyles from "./style";

const Page404 = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="sm" justify="center">
      <Paper className={classes.paper} elevation={6} >
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <img src={process.env.PUBLIC_URL + '/assets/404.jpg'} alt="" className={classes.media} />
          </Grid>
          <Grid item xs={12} md={12} >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to home
          </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Page404;
