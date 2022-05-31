import React, { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import AttractionPage from "./component/Attraction/AttractionPage";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <Navbar />
          <Switch>
          <Route />
          </Switch>
          <AttractionPage />
        </LocalizationProvider>
      </BrowserRouter>
    </>
  );
};
export default App;
