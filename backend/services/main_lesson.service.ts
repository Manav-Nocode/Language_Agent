import { generateExamples } from "./generateExamples.js";
import { generateWords } from "./words.service.js";

export async function generateLesson() {
  const words = await generateWords();
  const examples = await generateExamples(words);
}
