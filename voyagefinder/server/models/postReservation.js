import mongoose from "mongoose";

const reservationSchema = mongoose.Schema({
  id: String,
  type: String,
  num : String,
  etablisment: String,
  confirmation: Boolean,
  date: String
});
const  PostReservation = mongoose.model('PostReservation', reservationSchema );
export default PostReservation;
