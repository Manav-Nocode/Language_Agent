import express from "express";
import { LessonRouter } from "../routes/lesson_routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", LessonRouter);
app.get("/a", (req, res) => {
  res.json({
    msg: "its workking",
  });
});
app.listen(4000);
