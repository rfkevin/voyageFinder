import express from "express";
import { getPlaning,  getSpecificPlaning, createPlaning, updatePlaning, reservationPlaning} from "../controllers/planing.js";
import auth from "../middleware/auth.js";
const router = express.Router({mergeParams: true});

router.get("/", auth, getPlaning);
router.get('/:id', auth, getSpecificPlaning);
router.post('/', auth , createPlaning);
router.patch('/',auth , updatePlaning);
router.patch('/reservation',auth , reservationPlaning)

export default router;
