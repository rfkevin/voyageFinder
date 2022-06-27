import Planing from "../models/planing.js";
import express from "express";

const router = express.Router();
// a faire
export const getPlaning = async (req, res) => {
  try {
    const planing = await Planing.find();
    res.status(200).json(planing);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

export const getSpecificPlaning = async (req, res) => {
  const email = req.params.id;
  try {
    const existingPlaning = await Planing.findOne({ email: email });
    if (!existingPlaning) {
      res.statusMessage = "contact us your planing doesn't exists";
      return res.status(404).send("contact us your planing doesn't exists");
    }
    res.status(200).json(existingPlaning);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

export const updatePlaning = async (req, res) => {
  const { email, planing } = req.body;
  try {
    const existingPlaning = await Planing.findOneAndReplace(
      { email: email },
      { email: email, planing: planing },
      { upsert: true, returnDocument: "after" }
    );
    res.status(200).json(existingPlaning);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

export const createPlaning = async (req, res) => {
  const { email, planing } = req.body;
  try {
    const existingPlaning = await Planing.findOne({ email });

    if (!existingPlaning) {
      const newPlaning = new Planing({
        email: email,
        planing: planing,
      });
      const result = await newPlaning.save();
      res.status(201).json(newPlaning);
    } else {
      res.status(200).json(existingPlaning);
    }
  } catch (error) {
    res.status(409).send({ message: error.message });
  }
};
export const reservationPlaning = async (req, res) => {
  const { email, planing } = req.body;
  let color = "";
  switch (planing.Description) {
    case "attractions":
      color = "Green";
      break;
    case "hotels":
      color = "red";
      planing.IsAllDay = true;
      break;
    case "restaurants":
      color = "yellow";
      break;
    case "Flight":
      color = "orange";
      break;
    default:
      color = "blue";
      break;
  }
  planing.CategoryColor = color;
  try {
    const existingPlaning = await Planing.findOneAndUpdate(
      { email: email },
      { $push: { planing: planing } },
      { returnDocument: "after" }
    );
    res.status(200).json(existingPlaning);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
export default router;
