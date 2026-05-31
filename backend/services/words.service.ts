import { ai } from "../lib/Ai_service.js";
import { System_prompt } from "../prompts/System_prompt.js";
import { generateExamples } from "./generateExamples.js";
import type { WORD } from "../types/types.js";

export async function generateWords() {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: `Generate five German words and return json data 
    output example ---> {"word" :  , "meaning":  }
    `,
    config: {
      systemInstruction: System_prompt,
      responseMimeType: "application/json",
    },
  });

  if (!response.text) {
    throw new Error("No text content returned from the Gemini model.");
  }

  const Words_generated = JSON.parse(response.text) as WORD[];
  await generateExamples(Words_generated);
  return Words_generated;
}
