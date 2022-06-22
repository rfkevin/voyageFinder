import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Typography, Button } from "@mui/material";
import { Grid, CircularProgress} from "@mui/material"
import Navbar from "../Navbar/Navbar";
import { updatePlaning, getPlaning } from "./CalendarSlice";

import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import useStyles from "./style";
const Calendar = () => {
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
        <Typography variant="h6" align="center">
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
      </Paper>
    )}
    </>
  );
};

export default Calendar;
