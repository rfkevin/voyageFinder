import express from "express";
import { getPosts, createReservation } from "../controllers/post.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/", auth , createReservation);

export default router;
