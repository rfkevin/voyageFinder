import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended: true}));
app.use(cors());
PASSWORD = process.env.PASSWORD

const CONNECTION_URL = `mongodb+srv://voyagefinder:${PASSWORD}@cluster0.peklf.mongodb.net/?retryWrites=true&w=majority`
