import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Typography, Avatar, Toolbar, Button } from "@material-ui/core";
import useStyles from "./style";
import logo from "../../Assets/logo.png";

const MyComponent = () => {
  const classes = useStyles();
  const user = null();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          component={Link}
          to="/"
          variant="h4"
          align="center"
        >
          DestinationFinder
        </Typography>
        <img className={classes.image} src={logo} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MyComponent;
