import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux"

import Header from "./component/Header/Header";
import List from "./component/List/List";
import Map from "./component/Map/Map";
import {setPlaces, setFiltered, setCoordinates} from "./store/slices"

import { getPlacesData } from "./api";

const App = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place);
  const filteredPlaces = useSelector((state) => state.filtred);
  const coordinates = useSelector((state) => state.coordinates);
  const [bounds, setBounds] = useState({});
  const [child, setChild] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        dispatch(setCoordinates({ lat: latitude, lng: longitude }))
    );
  }, []);
  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    dispatch(setFiltered(filteredPlaces));
  }, [rating]);
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        dispatch(setPlaces( data?.filter((place) => place.name && place.num_reviews > 0)));
        dispatch(setFiltered([]));
        setLoading(false);
      });
    }
  }, [type, bounds]);
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid
        container
        spacing={3}
        style={{
          width: "100",
        }}
      >
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            child={child}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setBounds={setBounds}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChild={setChild}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default App;
