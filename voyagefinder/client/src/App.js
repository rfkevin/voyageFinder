import React from "react";
import { AdminLayout } from './component/Admin/AdminLayout';
import Payment from './component/payment/payment';

import { CssBaseline } from "@material-ui/core";
import AttractionPage from "./component/Attraction/AttractionPage";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import Auth from "./component/Auth/Auth";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Flight from "./component/Flight/flight";
import Calendar from "./component/Calendar/Calendar";
import Page404 from "./component/Page404/page404";
import "./App.css";
import ProtectedRoutes from "./ProtectedRoutes";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";
import Reservation from "./component/Admin/Reservation/Reseravation";
import Users from "./component/Admin/Users/Users";



const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_API}>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/setplaning" element={<AttractionPage />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/flight" element={<Flight />} />
                <Route path="/myplaning" element={<Calendar />} />
                <Route path="/payment" element={<Payment />} />
              </Route>

              <Route element={<ProtectedAdminRoutes />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Users />} />
                <Route path="/admin/reservation" element={<Reservation />} />
              </Route>
              </Route>
              <Route path="*" element={<Page404 />} />
            </Routes>
          </LocalizationProvider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
};
export default App;
