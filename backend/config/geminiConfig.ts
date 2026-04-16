import { GoogleGenAI } from "@google/genai";

export const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
export const model = "gemini-2.5-flash";

// console.log(model)

// const response = await fetch(
//   `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`
// );
// const data = (await response.json()) as { models?: Array<Record<string, unknown>> };
// console.log(data.models);
