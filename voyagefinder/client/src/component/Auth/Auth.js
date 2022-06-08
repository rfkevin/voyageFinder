import React, { useState } from "react";
import Input from "./input";
import Icon from "./icon";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authUser } from "./slices";
import jwt_decode from "jwt-decode";
import { signin, signup } from "./slices";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import { GoogleLogin } from "@react-oauth/google";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./style";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const [showPassoword, setShowPassoword] = useState(false);
  const user = useSelector((state) => state.user);
  const state = null;
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const handleShowPassword = () =>
    setShowPassoword((prevShowPassword) => !prevShowPassword);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      try {
        dispatch(signup(formData));
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        dispatch(signin(formData));
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassoword(false);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="firstName"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="lastName"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassoword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            auto_select
            onSuccess={(credentialResponse) => {
              const decoded = jwt_decode(credentialResponse.credential);
              console.log(credentialResponse);
              try {
                dispatch(
                  authUser({
                    result: decoded,
                    token: credentialResponse.credential,
                  })
                );
                navigate("/");
              } catch (err) {
                console.log(err);
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account ? Sign In"
                  : "Don't have an account ? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
