import { Router } from "express";
import { generateWords } from "../services/words.service.js";
import { getLesson } from "../controllers/lesson_controller.js";

export const LessonRouter = Router();

LessonRouter.get("/words", getLesson);
