import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export const model = genAI.getGenerativeModel({model: "gemini-pro-latest"})

// console.log(model)

// const response = await fetch(
//   `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`
// );
// const data = (await response.json()) as { models?: Array<Record<string, unknown>> };
// console.log(data.models);


