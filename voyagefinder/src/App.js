import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./component/Header/Header";
import List from "./component/List/List";
import Map from "./component/Map/Map";

import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinate] = useState({});
  const [bounds, setBounds] = useState({});
  const [child, setChild] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        setCoordinate({ lat: latitude, lng: longitude })
    );
  }, []);
  useEffect(() => {
    setLoading(true)
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setLoading(false)
    });
  }, [coordinates, bounds]);
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
          <List places={places} child = {child} isLoading = {isLoading} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinate={setCoordinate}
            setBounds={setBounds}
            coordinates={coordinates}
            places = {places}
            setChild = {setChild}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default App;
