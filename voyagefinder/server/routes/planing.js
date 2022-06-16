import express from "express";
import { getPlaning,  getSpecificPlaning, createPlaning, updatePlaning} from "../controllers/planing.js";
import auth from "../middleware/auth.js";
const router = express.Router({mergeParams: true});

router.get("/", getPlaning);
router.get('/:id', getSpecificPlaning);
router.post('/', createPlaning);
router.patch('/', updatePlaning);

export default router;
