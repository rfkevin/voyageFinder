import mongoose from "mongoose";

const planingSchema = mongoose.Schema({
  email: {type: String, required: true},
  planing:[{
    id: {type: String},
    EndTime: {type: String},
    EndTimeZone: {type: String},
    StartTime : {type: String},
    StartTimeZone : {type: String},
    Subject: {type: String},
    Location: {type: String},
    Description : {type: String},
    IsAllDay : {type: Boolean },
    RecurrenceRule : {type: String}
  }]
});

export default mongoose.model("Planing", planingSchema);
