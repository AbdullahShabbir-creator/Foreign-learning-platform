import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = 'AIzaSyBL6eXROyGEEDmz-Hc698oMkG-oybj1y-w';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 2048,
  responseMimeType: "text/plain",
};

// Start a chat session
export const startChatSession = () => {
  return model.startChat({
    generationConfig,
    history: [],
  });
};

// General function that takes a prompt
export const runPrompt = async (prompt) => {
  const chatSession = startChatSession();
  try {
    const result = await chatSession.sendMessage(prompt);
    let text = result.response.text();

    // Remove ```json wrapping if present
    text = text.replace(/```json|```/g, "").trim();

    return JSON.parse(text);
  } catch (error) {
    console.error("AI generation failed:", error);
    throw new Error("Failed to generate content");
  }
};
