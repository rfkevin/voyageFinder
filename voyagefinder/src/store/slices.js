import { createSlice } from "@reduxjs/toolkit";

export const placeSlice = createSlice({
  name: "place",
  initialState: [],
  reducers: {
    setPlaces: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const {setPlaces} = placeSlice.actions;

export const filtredSlice = createSlice({
  name:"filtred",
  initialState: [],
  reducers: {
    setFiltered:(state, action) => {
      state = action.payload;
      return state;
    },

  }
})

export const {setFiltered} = filtredSlice.actions;

export const coordinatesSlice = createSlice({
  name:"coordinates",
  initialState: {},
  reducers: {
    setCoordinates:(state, action) => {
      state = action.payload;
      return state;
    },

  }
})

export const {setCoordinates} = coordinatesSlice.actions;
