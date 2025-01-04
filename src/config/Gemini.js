import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyC_Imdoqr7TmZtGrVXUFHsAJBZEHx6UWnA";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);

    return result.response.text();
  } catch (error) {
    console.error("Error in Gemini AI:", error);
    return "Error while processing the request";
  }
}

export default run;
