import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";

export const getPlaning = createAsyncThunk(
  "planing/getPlaning",
  async (id) => {
    try {
      const response = await api.getPlaning(id);
      return response.data.planing
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

export const createPlaning = createAsyncThunk(
  "planing/createPlaning",
  async (id) => {
    try {
      const response = await api.createPlaning({email: id , planing:[]});
      return response.data.planing;
    } catch (error) {
      return error.message;
    }
  }
);

export const updatePlaning = createAsyncThunk(
  "planing/updatePlaning",
  async (data) => {
    const { id, planing } = data;
    try {
      const response = await api.updatePlaning(id, planing);
      return response.data.planing;
    } catch (error) {
      return error.message;
    }
  }
);

export const reservationPlaning = createAsyncThunk(
  "planing/reservationPlaning",
  async (data) => {
    const { id, planing } = data;
    try {
      const response = await api.reservationPlaning(id, planing);
      return response.data.planing;
    } catch (error) {
      return error.message;
    }
  }
);




export const planingSlice = createSlice({
  name: "planing",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    setPlaning: (state, action) => {
      state.data = action.payload;
      return state;
    },
  },
  extraReducers: {
    [getPlaning.pending]: (state) => {
      state.isLoading = true;
    },
    [getPlaning.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [getPlaning.rejected]: (state) => {
      state.isLoading = false;
    },
    [createPlaning.pending]: (state) => {
      state.isLoading = true;
    },
    [createPlaning.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [createPlaning.rejected]: (state) => {
      state.isLoading = false;
    },
    [updatePlaning.pending]: (state) => {
      state.isLoading = true;
    },
    [updatePlaning.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [reservationPlaning.rejected]: (state) => {
      state.isLoading = false;
    },
    [reservationPlaning.pending]: (state) => {
      state.isLoading = true;
    },
    [reservationPlaning.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [reservationPlaning.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { setPlaning } = planingSlice.actions;
