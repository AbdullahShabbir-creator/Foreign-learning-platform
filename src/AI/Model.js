import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = 'AIzaSyAYoxtpsKd1Y01lu1nAMXYAfRyUi-wmaxE';
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

export const startChatSession = () => {
  return model.startChat({
    generationConfig,
    history: [],
  });
};

// ✅ parseJson = false for plain paragraph response (like AI review)
export const runPrompt = async (prompt, parseJson = true) => {
  const chatSession = startChatSession();
  try {
    const result = await chatSession.sendMessage(prompt);
    let text = result.response.text();

    text = text.replace(/```json|```/g, "").trim();

    if (parseJson) {
      return JSON.parse(text);
    } else {
      return text; // ⬅️ Return plain paragraph directly
    }

  } catch (error) {
    console.error("AI generation failed:", error);
    throw new Error("Failed to generate content");
  }
};
