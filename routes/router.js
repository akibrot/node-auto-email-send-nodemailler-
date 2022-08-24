import express from "express";
import {
  sendemailauto,
  welcome,

} from "../controllers/controller.js";
const router = express.Router();

router.get("/", welcome);
router.post("/sendautoemail",sendemailauto)

export default router;
