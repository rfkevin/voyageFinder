import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchReservation, createReservation } from "../../../api/index";

export const getReservation = createAsyncThunk(
  "reservation/getReservation",
  async () => {
    try {
      const response = await fetchReservation();
      const formatedresponse = await response.data;
      return formatedresponse;
    } catch (error) {
      return error.message;
    }
  }
);

export const createReservations = createAsyncThunk(
  "reservation/createReservation",
  async (reservation) => {
    try {
      console.log(reservation);
      const response = await createReservation(reservation);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    info: {
      id: "",
      type: "",
      num: "",
      etablissment: "",
      confirmation: "",
      date: null,
    },
    isLoading: false,
  },
  reducers: {
    setReservation: (state, action) => {

      state.info = action.payload;
      console.log(state.info);
      return state;
    },
  },
  extraReducers: {
    [getReservation.pending]: (state) => {
      state.isLoading = true;
    },
    [getReservation.fulfilled]: (state, action) => {
      state.info = action.payload;
      state.isLoading = false;
    },
    [getReservation.rejected]: (state) => {
      state.isLoading = false;
    },
    [createReservations.pending]: (state) => {
      state.isLoading = true;
    },
    [createReservations.fulfilled]: (state, action) => {
      state.info = action.payload;
      state.isLoading = false;
    },
    [createReservations.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setReservation } = reservationSlice.actions;
