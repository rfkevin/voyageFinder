import { createSlice } from "@reduxjs/toolkit";

//liste variable pour la partie map restaurants, hotels, attractions
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

export const boundsSlice = createSlice({
  name:"bounds",
  initialState: {},
  reducers: {
    setBounds:(state, action) => {
      state = action.payload;
      return state;
    },

  }
})

export const {setBounds} = boundsSlice.actions;

export const childSlice = createSlice({
  name:"child",
  initialState: null,
  reducers: {
    setChild:(state, action) => {
      state = action.payload;
      return state;
    },

  }
})

export const {setChild} = childSlice.actions;

export const loadingSlice = createSlice({
  name:"loading",
  initialState: false,
  reducers: {
    setLoading:(state, action) => {
      state = action.payload;
      return state;
    },

  }
})

export const {setLoading} = loadingSlice.actions;

export const typeSlice = createSlice({
  name:"type",
  initialState: "restaurants",
  reducers: {
    setType:(state, action) => {
      state = action.payload;
      return state;
    },

  }
})

export const {setType} = typeSlice.actions;

export const ratingSlice = createSlice({
  name:"rating",
  initialState: "",
  reducers: {
    setRating:(state, action) => {
      state = action.payload;
      return state;
    },

  }
})

export const {setRating} = ratingSlice.actions;
