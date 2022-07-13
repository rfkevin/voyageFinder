import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../Auth/input";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { GoogleLogin } from "@react-oauth/google";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./style";

const initialState = {
  number: "",
  date: "",
  ccv: "",
  name: ""
};

const Payment = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log("payment success");
    navigate("/myplaning")
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h5">Payment</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <>
              <Input
                name="number"
                label="Credit card number"
                handleChange={handleChange}
              />
              <Input
                name="date"
                label="Expiry date"
                handleChange={handleChange}
                autoFocus
                half
              />
              <Input name="CVV" label="CVV" handleChange={handleChange} half />
            </>

            <Input
              name="name"
              label="Name on card"
              handleChange={handleChange}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Payment;
