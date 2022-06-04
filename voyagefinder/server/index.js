import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/post.js';
import  userRoutes  from './routes/user.js';

const app = express();


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
app.use('/posts', postRoutes);
app.use('/user', userRoutes);
const CONNECTION_URL = "mongodb+srv://voyagefinder:y6ckvQtZFneKuHkj@cluster0.peklf.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`serveur runing on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
