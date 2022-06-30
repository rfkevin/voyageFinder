import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { prototype } from "./prototype";
import { setFlight, dataFormating, getFlightList } from "./flightSlice";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarFooter,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { setDate } from "../Attraction/PlaceDetails/placeDetailsSlice";
import { DatePicker } from "@mui/lab";
import Input from "../Auth/input";
import useStyles from "./style";
import { TextField, Button } from "@material-ui/core";
import * as moment from "moment";
import "react-pro-sidebar/dist/css/styles.css";


const Search = () => {
  const classes = useStyles();
  const initialState = {
    origin: "",
    destination: "",
  };
  const [formData, setFormData] = useState(initialState);
  const date = useSelector((state) => state.date);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formateddate = moment(date).format("YYYY-MM-DD").toString();
    formData['dateResv'] = formateddate;
    dispatch(getFlightList(formData));
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className={classes.container}>
      <ProSidebar>
        <SidebarHeader>
          <MenuItem>Search for flight</MenuItem>
        </SidebarHeader>
        <SidebarContent>
          <div style={{ height: "85vh" }} className={classes.form}>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Menu iconShape="square">
                <MenuItem>
                  <DatePicker
                    disablePast={true}
                    name="date"
                    label="Date Picker"
                    inputFormat="y-M-d"
                    format="y-M-d"
                    renderInput={(params) => <TextField {...params} />}
                    value={date}
                    minDate={new Date()}
                    onChange={(newvalue) => {
                      dispatch(setDate(newvalue.toString()));
                    }}
                  />
                </MenuItem>
                <MenuItem>
                  <Input
                    name="origin"
                    label="origin airport IATA"
                    handleChange={handleChange}
                  />
                </MenuItem>
                <MenuItem>
                  <Input
                    className={classes.input}
                    name="destination"
                    label="destination airport IATA"
                    handleChange={handleChange}
                  />
                </MenuItem>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {

                  }}
                >
                  Search
                </Button>
              </Menu>
            </form>
          </div>
        </SidebarContent>
        <SidebarFooter>copyright</SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Search;
