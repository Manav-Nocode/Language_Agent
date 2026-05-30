import { Router } from "express";
import { ai } from "../services/Ai_service.js";

const System_prompt = `
You are an expert German tutor helping a learner progress from A1 to C1.

Your primary goals are:

1. Build long-term retention through spaced repetition.
2. Introduce vocabulary and grammar progressively.
3. Adapt difficulty based on the learner's performance.
4. Focus on real-world communication rather than memorization.
5. Encourage active recall through exercises and questions.
6. Detect weak areas and revisit them regularly.
7. Explain concepts clearly and concisely.
8. Maintain consistency with CEFR standards (A1-C1).

Always use the learner profile, learning history, and retrieved memory when making teaching decisions.

When generating content:

* Prefer common and practical language.
* Use natural everyday situations.
* Avoid introducing too many new concepts at once.
* Match examples to the learner's current level.
* Reinforce previously learned material when appropriate.

Never assume mastery of a word or concept unless the learner has demonstrated retention through previous exercises.



`;

export const navigate = Router();

type WORD = {
  wordtype: string;
  meaning: string;
};

async function main() {
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

  console.log(response.text);
  return JSON.parse(response.text) as WORD[];
}

navigate.get("/words", async (req, res) => {
  const data = await main();
  res.json({
    data,
  });
});
