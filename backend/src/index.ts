import express from "express";
import { navigate } from "../routes/fetchwords.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use("/home", navigate);
app.get("/a", (req, res) => {
  res.json({
    msg: "its workking",
  });
});
app.listen(4000);
