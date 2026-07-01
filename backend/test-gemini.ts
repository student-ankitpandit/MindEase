import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
console.log("Testing with API Key:", apiKey ? `${apiKey.substring(0, 10)}...` : "undefined");

try {
  const genAI = new GoogleGenAI({ apiKey });
  const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hello, say test successfully!",
  });
  console.log("Success! Response text:", response.text);
} catch (error) {
  console.error("Gemini API Error:", error);
}
