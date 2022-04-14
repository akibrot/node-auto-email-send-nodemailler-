import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/router.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

mongoose.connect("mongodb://localhost/PORTOFOLIO_PROJECT", () =>
  console.log("DATABASE CONNECTED")
);

app.use(router);
const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`app started at port ${PORT}`);
});
