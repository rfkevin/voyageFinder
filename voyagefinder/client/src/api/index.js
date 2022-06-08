import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_TRAVEL_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const flightAviation = async (origin, destination, dateResv) => {
  try {
    console.log("getFlightList");
    console.log(origin);
    console.log(destination);
    console.log(dateResv)
    const data = await axios.request({
      methode: "GET",
      url: "https://skyscanner44.p.rapidapi.com/search",
      params: {
        adults: "1",
        origin: origin,
        destination: destination,
        departureDate: dateResv,
      },
      headers: {
        "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_SKY_KEY,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchReservation = () => API.get("/posts");

export const createReservation = (newReservation) =>
  API.post("/posts", newReservation);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
