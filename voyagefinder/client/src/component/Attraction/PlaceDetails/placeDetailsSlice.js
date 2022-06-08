import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice({
  name: "Date",
  initialState: new Date().toString(),
  reducers: {
    setDate: (state, action) => {
      state = action.payload;
      console.log(state)
      return state;
    },
  },
});

export const {setDate} = dateSlice.actions;
