import { generateLesson } from "../services/main_lesson.service.js";
import { generateWords } from "../services/words.service.js";

export async function getLesson(req: any, res: any) {
  const lesson = await generateLesson();
  res.json({
    lesson,
  });
}
