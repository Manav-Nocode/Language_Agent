import { success } from "zod";
import { generateLesson } from "../services/main_lesson.service.js";
import { generateWords } from "../services/words.service.js";

export async function getLesson(req: any, res: any) {
  try {
    console.log("generated: \n");
    const lesson = await generateLesson();
    res.status(200).json({
      success: true,
      lesson: lesson,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: "failed to generate lesson",
    });
  }
}
