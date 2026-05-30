import { GoogleGenAI } from "@google/genai";

import dotenv from "dotenv";
dotenv.config();

const Gemini_api = process.env.GOOGLE_API;
if (!Gemini_api) {
  throw new Error("LLm error");
}
export const ai = new GoogleGenAI({ apiKey: Gemini_api });
