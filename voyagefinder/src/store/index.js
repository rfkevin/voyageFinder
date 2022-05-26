import { configureStore } from "@reduxjs/toolkit";
import { placeSlice, filtredSlice, coordinatesSlice } from "./slices";
export const store = configureStore({
  reducer: {
    place: placeSlice.reducer,
    filtred: filtredSlice.reducer,
    coordinates: coordinatesSlice.reducer
  },
});
