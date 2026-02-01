import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyDFttgMb2_aFOX_iD0Yn62gtw9CDHO28Ds";

const AI = new GoogleGenAI({
  apiKey: apiKey,
});

const models = await AI.models.list()
console.log("Available models:", models);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const response = await AI.models.generateContent({
      model: "models/gemini-2.0-flash-lite",
      contents: [
        {
          type: "text",
          text: prompt,
        },
      ],
      generationConfig,
    });

    // The response has candidates with `text`
    return response.candidates.map((c) => c.text).join("\n");
  } catch (error) {
    console.error("Error in Gemini AI:", error);
    return "Error while generating content. You've exceeded your quota, Please retry in 36.857584285s";
  }
}

export default run;
