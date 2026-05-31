import express from "express";

import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/apitesting", (req, res) => {
  res.json({
    success: true,
    lesson: {
      words: [
        {
          word: "gemütlich",
          meaning: "cozy, comfortable, warm and welcoming",
        },
        {
          word: "die Entscheidung",
          meaning: "the decision",
        },
        {
          word: "verbessern",
          meaning: "to improve",
        },
        {
          word: "der Alltag",
          meaning: "everyday life, daily routine",
        },
        {
          word: "herausfordernd",
          meaning: "challenging",
        },
      ],
      examples: [
        {
          word: "gemütlich",
          examples: [
            "Unser Wohnzimmer ist mit dem neuen Sofa sehr gemütlich geworden.",
            "Wir haben einen gemütlichen Abend mit Freunden verbracht.",
          ],
        },
        {
          word: "die Entscheidung",
          examples: [
            "Es war keine leichte Entscheidung, aber ich musste sie treffen.",
            "Welche Entscheidung hast du bezüglich deiner neuen Stelle getroffen?",
          ],
        },
        {
          word: "verbessern",
          examples: [
            "Ich möchte meine Grammatik verbessern, indem ich täglich übe.",
            "Diese neue Software wird die Abläufe im Büro deutlich verbessern.",
          ],
        },
        {
          word: "der Alltag",
          examples: [
            "Im hektischen Alltag vergisst man oft, sich Zeit für sich selbst zu nehmen.",
            "Sport hilft mir dabei, eine gute Balance im Alltag zu finden.",
          ],
        },
        {
          word: "herausfordernd",
          examples: [
            "Das neue Projekt in der Arbeit ist sehr herausfordernd, aber auch spannend.",
            "Eine neue Sprache zu lernen ist herausfordernd, aber es lohnt sich.",
          ],
        },
      ],
    },
  });
});
app.listen(4000);
