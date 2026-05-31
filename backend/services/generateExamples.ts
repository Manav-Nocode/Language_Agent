import { ai } from "../lib/Ai_service.js";
import { System_prompt } from "../prompts/System_prompt.js";

type WORD = {
  wordtype: string;
  meaning: string;
};

export const generateExamples = async (words: WORD[]) => {
  console.log(`received ${words}`);
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: `Generate 2 examples sentences for each of these words ${words}
    this should be the format
    [
  {
    "word": "während",
    "examples": [
      "...",
      "...",
      "..."
    ]
  }
]
    `,
    config: {
      systemInstruction: System_prompt,
      responseMimeType: "application/json",
    },
  });

  if (!response.text) {
    throw new Error("No text content returned from the Gemini model.");
  }

  const Sentences_generated = JSON.parse(response.text);
  return Sentences_generated;
};
