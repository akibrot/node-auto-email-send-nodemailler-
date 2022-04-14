import express from "express";
import {
  welcome,
  createlist,
  getalllist,
  listdeletehandler,
  createdata,
  getalldata,
  createtestimonial,
  getalltestimonials,
} from "../controllers/controller.js";
const router = express.Router();

router.get("/", welcome);
router.post("/createlist", createlist);
router.get("/getalllist", getalllist);
router.post("/listdelete", listdeletehandler);
router.post("/createdata", createdata);
router.get("/getalldata", getalldata);
router.post("/createtestimonial", createtestimonial);
router.get("/getalltestimonials", getalltestimonials);

export default router;
