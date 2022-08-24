import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use(router);
const PORT = process.env.PORT || "8080";
app.listen(PORT, () => {
  console.log(`app started at port ${PORT}`);
});
