import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getPlacesData } from "../../api/index";
import Search from "./Search/Search";
import List from "./List/List";
import Map from "./Map/Map";
import {
  setPlaces,
  setFiltered,
  setCoordinates,
  setLoading,
} from "../../store/slices";
import Navbar from "../Navbar/Navbar";

const AttractionPage = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place);
  const filteredPlaces = useSelector((state) => state.filtred);
  const bounds = useSelector((state) => state.bounds);
  const type = useSelector((state) => state.type);
  const rating = useSelector((state) => state.rating);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        dispatch(setCoordinates({ lat: latitude, lng: longitude }))
    );
  }, [dispatch]);
  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    dispatch(setFiltered(filteredPlaces));
  }, [rating, dispatch, places]);
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      dispatch(setLoading(true));
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        dispatch(
          setPlaces(
            data?.filter((place) => place.name && place.num_reviews > 0)
          )
        );
        dispatch(setFiltered([]));
        dispatch(setLoading(false));
      });
    }
  }, [type, bounds, dispatch]);
  return (
    <>
      <Navbar />
      <Search />
      <Grid
        sx={{ overflow: "auto" }}
        container
        spacing={3}
        style={{
          width: "100",
        }}
      >
        <Grid item xs={12} md={4}>
          <List places={filteredPlaces.length ? filteredPlaces : places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map places={filteredPlaces.length ? filteredPlaces : places} />
        </Grid>
      </Grid>
    </>
  );
};
export default AttractionPage;
