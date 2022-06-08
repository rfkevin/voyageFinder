import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index";

export const signin = createAsyncThunk(
  "user/signIn",
  async (formData) => {
    try {
      const data = await api.signIn(formData);

      return data.data
    } catch (error) {
      console.log(error);
    }
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async (formData) => {
    try {
      const  data  = await api.signUp(formData);
      console.log(data)
      return data.data
    } catch (error) {
      console.log(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    authUser: (state, action) => {
      console.log(action.payload);
      state = action.payload;
      localStorage.setItem("profile", JSON.stringify({ ...state }));
      return state;
    },
    getUser: (state, action) => {
      state = action.payload;
      return state;
    },
    logOut: (state, action) => {
      localStorage.clear();
      state = null;
      return state;
    },
  },
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      state = action.payload;
      localStorage.setItem("profile", JSON.stringify({ ...state }));
    },
    [signin.rejected]: (state) => {
      console.log(state);
    },
    [signup.fulfilled]: (state, action) => {
      console.log(state);
      state = action.payload;
      localStorage.setItem("profile", JSON.stringify({ ...state }));
    },
    [signup.rejected]: (state) => {
      console.log(state);
    },
  },
});

export const { authUser, getUser, logOut } = userSlice.actions;
