import React,{useState} from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {useDispatch} from "react-redux";
import {setCoordinates  } from '../../../store/slices';

import useStyles from "./style.js";

const Search = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    dispatch(setCoordinates({lat, lng}));
  }
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Box display="flex">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Search;
