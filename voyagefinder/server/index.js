import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/post.js";
import userRoutes from "./routes/user.js";
import planingRoutes from "./routes/planing.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);
app.use(cors());
app.use("/posts", postRoutes);
app.use("/user", userRoutes);
app.use("/planing", planingRoutes);
app.get('/', (req, res) => {
  res.send('Runing.');
});
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`serveur runing on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
