import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { flightAviation } from "../../api/index";

export const dataFormating = (data) => {
  var struct = {};
  var index = 0;
  var indexItem = 0;
  var formatedData = {};
  var boucleItems = [];
  const boucle = data.data.itineraries.buckets;
  while (boucle[index]) {
    formatedData[boucle[index].id] = [];
    boucleItems = boucle[index].items;
    while (boucleItems[indexItem]) {
      struct["id"] = boucleItems[indexItem].id;
      struct["price"] = boucleItems[indexItem].price.formatted;
      struct["score"] = boucleItems[indexItem].score / 2;
      struct["stop"] = boucleItems[indexItem].legs[0].stopCount;
      struct["origin"] = boucleItems[indexItem].legs[0].origin.name;
      struct["destination"] = boucleItems[indexItem].legs[0].destination.name;
      struct["depart"] = boucleItems[indexItem].legs[0].departure;
      struct["compagnie"] = boucleItems[indexItem].legs[0].carriers.marketing[0].name;
      struct["temps"] = boucleItems[indexItem].legs[0].durationInMinutes;
      struct["img"] = boucleItems[indexItem].legs[0].carriers.marketing[0].logoUrl;
      formatedData[boucle[index].id].push(struct);
      indexItem++;
    }
    indexItem = 0;
    index++;
  }
  console.log(formatedData);
};

export const getFlightList = createAsyncThunk(
  "flight/getFlightList",
  async (flightData) => {
    const { origin, destination, dateResv } = flightData;
    try {
      console.log("getFlightList");
      console.log(origin);
      console.log(destination);
      console.log(dateResv);
      const response = await flightAviation(origin, destination, dateResv);
      console.log(response);
      const formatedresponse = await response.data;
      console.log(formatedresponse);
      return formatedresponse;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

export const flightSlice = createSlice({
  name: "flight",
  initialState: {
    data: {
      tag: "",
      name: "Obj.data.itineraries.buckets[0] ",
      origine: " ",
      destination: " ",
      departure: " ",
      arrival: " ",
      price: " ",
      score: " ",
      image: " ",
    },
    isLoading: false,
  },
  reducers: {
    setFlight: (state, action) => {
      state.info = action.payload;
      console.log(state.info);
      return state;
    },
  },
  extrareducers: {
    [getFlightList.pending]: (state) => {
      state.isLoading = true;
    },
    [getFlightList.fulfilled]: (state, action) => {
      state.info = action.payload;
      state.isLoading = false;
    },
    [getFlightList.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { setFlight } = flightSlice.actions;
