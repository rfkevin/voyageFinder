import React,{useEffect}from "react";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import { AppBar, Typography, Avatar, Toolbar, Button } from "@material-ui/core";
import useStyles from "./style";
import logo from "../../Assets/logo.png";
import { getUser, logOut } from "../Auth/slices";
import { useDispatch, useSelector } from "react-redux";

const MyComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user  = useSelector((state) => state.user?.info);
  const classes = useStyles();
  const logout = () => {
    dispatch(logOut());
    navigate("/");

  }
  useEffect(() => {
    const token = user?.email;

    dispatch(getUser(JSON.parse(localStorage.getItem("profile"))));
  }, []);
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
              alt={user.name}
              src={user.imageUrl}
            >
              {user.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick = {logout}
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
