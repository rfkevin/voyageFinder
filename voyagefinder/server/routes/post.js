import express from "express";
import { getPosts, createReservation } from '../controllers/post.js';

const router = express.Router();

router.get("/", getPosts);
router.post("/", createReservation);

export default router;
