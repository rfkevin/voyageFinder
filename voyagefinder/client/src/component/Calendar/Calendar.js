import { Button, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import {
  Agenda, Day, DragAndDrop, Inject, Month, Resize, ScheduleComponent, Week,
  WorkWeek
} from "@syncfusion/ej2-react-schedule";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { getPlaning, updatePlaning } from "./CalendarSlice";
import useStyles from "./style";
import { useNavigate } from "react-router-dom";
const Calendar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const planing = useSelector((state) => state.planing.data);
  const  isloading = useSelector((state) => state.planing.isLoading);
  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        await dispatch(getPlaning(user.result.email));

      };
      fetchData();
    }
  }, [user, dispatch]);
  let modifiedPlaning = [...planing];
  return (
    <>
      <Navbar />
      {isloading ? (
        <div className={classes.loading}>
          <Grid item>
            <CircularProgress size="7em" />
          </Grid>
        </div>
      ) : (
      <Paper elevation={4} className={classes.paper}>
        <Typography variant="h6">
          Calendar
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(
              updatePlaning({ id: user.result.email, planing: modifiedPlaning})
            );
          }}
        >
          Save
        </Button>
        <ScheduleComponent
          height="650px"
          eventSettings={{ dataSource: modifiedPlaning }}
        >
          <Inject
            services={[Day, Week, Month, WorkWeek, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
        <Button
          className={classes.submit}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            navigate("/payment")
          }}
        >
          Pay for trip
        </Button>
      </Paper>
    )}
    </>
  );
};

export default Calendar;
