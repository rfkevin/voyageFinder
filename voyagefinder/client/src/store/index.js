import { configureStore } from "@reduxjs/toolkit";
import { reservationSlice } from '../component/Attraction/slices/reservatioslice';
import { dateSlice } from '../component/Attraction/PlaceDetails/placeDetailsSlice';

import {
  placeSlice,
  filtredSlice,
  coordinatesSlice,
  boundsSlice,
  childSlice,
  loadingSlice,
  typeSlice,
  ratingSlice
} from "./slices";
export const store = configureStore({
  reducer: {
    place: placeSlice.reducer,
    filtred: filtredSlice.reducer,
    coordinates: coordinatesSlice.reducer,
    bounds: boundsSlice.reducer,
    child : childSlice.reducer,
    loading : loadingSlice.reducer,
    type :typeSlice.reducer,
    rating : ratingSlice.reducer,
    reservation : reservationSlice.reducer,
    date : dateSlice.reducer,
    
  },
});
