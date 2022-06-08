import React, { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import AttractionPage from "./component/Attraction/AttractionPage";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import Auth from "./component/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Flight  from './component/Flight/flight';

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId="426309683556-t9lvbehn86rhhjs1ktqisv8o16r3ssiq.apps.googleusercontent.com">
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/setplaning" element={<AttractionPage />} />
              <Route path="/setplaning" element={<AttractionPage />} />
              <Route path="/flight" element={<Flight />} />
            </Routes>
          </LocalizationProvider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
};
export default App;
