import express from "express";
import { getPosts, createReservation , deletePosts, updatePosts } from "../controllers/post.js";
import auth from "../middleware/auth.js";
import admin from '../middleware/admin.js';
const router = express.Router();

router.post("/getreservation", admin , getPosts);
router.post("/deletereservation", admin , deletePosts);
router.post("/updatereservation", admin , updatePosts );
router.post("/", auth , createReservation);

export default router;
