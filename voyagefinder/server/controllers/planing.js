import Planing from "../models/Planing.js";
import express from 'express';

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
  const  email  = req.params.id;
  console.log(email);
  try {
    const existingPlaning = await Planing.findOne({ email: email  });
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
  const {email,  planing } = req.body;
  try {
    const existingPlaning = await Planing.findOneAndReplace(
      { email: email },
        { email: email , planing: planing },
      {upsert: true, returnDocument: "after"},

    );
    console.log(existingPlaning);
    res.status(200).json(existingPlaning);
  } catch (error) {
    console.log(error)
    res.status(404).send({ message: error.message });
  }
};

export const createPlaning = async (req, res) => {
  const { email, planing } = req.body;
  console.log(email);
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
export default router;
