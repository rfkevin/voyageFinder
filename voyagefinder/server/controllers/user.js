import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from 'dotenv';
dotenv.config();

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      res.statusMessage = "User doesn't exists.";
      return res.status(404).send("User doesn't exists.");
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      res.statusMessage = "Invalid Password.";
      return res.status(400).json({ message: "Invalid Password" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res.statusMessage = err;
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.statusMessage = "User Already exists.";
      return res.status(404).json({ message: "User Already exists." });
    }
    if (password !== confirmPassword) {
      res.statusMessage = "Password don't match.";
      return res.status(404).json({ message: "Password don't match." });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign({ email: result.email, id: result.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ result: result, token });
  } catch (e) {
    res.statusMessage = err;
    res.status(500).json({ message: "Somthing went wrong" });
  }
};
