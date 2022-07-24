import React, { useState } from "react";
import Input from "./input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authUser } from "./slices";
import jwt_decode from "jwt-decode";
import { signin, signup } from "./slices";
import { createPlaning } from "../Calendar/CalendarSlice";
import { useLocation } from "react-router";
import { DatePicker } from "@mui/lab";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField
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
  dob: "",
  phone: "",
};

const Auth = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [date, setDate] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const [showPassoword, setShowPassoword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
    const location = useLocation();
  const handleShowPassword = () =>
    setShowPassoword((prevShowPassword) => !prevShowPassword);
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (isSignup) {
      try {
        await dispatch(signup(formData));
        await dispatch(createPlaning(formData.email));
        console.log(formData);
        if (location.state?.from) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await dispatch(signin(formData));
        await dispatch(createPlaning(formData.email));
        if (location.state?.from) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
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
                <Input
                  name="phone"
                  label="PhoneNumber"
                  handleChange={handleChange}
                />
                <Grid item xs={12} sm= {12}>
                <DatePicker
                  label="Date of birth"

                  value={date}
                  onChange={(newDate) => {
                    setDate(newDate);
                    const formatedDate =
                      date.getDate() +
                      "/" +
                      (date.getMonth() + 1) +
                      "/" +
                      date.getYear();
                    handleChange({
                      target: { name: "dob", value: formatedDate },
                    });
                  }}
                  renderInput={(params) => <TextField {...params} className={classes.date}/>}
                />
                </Grid>
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
              try {
                dispatch(
                  authUser({
                    result: decoded,
                    token: credentialResponse.credential,
                  })
                );
                console.log(decoded);
                dispatch(createPlaning(decoded.email));
                if (location.state?.from) {
                  navigate(location.state.from);
                } else {
                  navigate("/");
                }
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
