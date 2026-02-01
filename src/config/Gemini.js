const { GoogleGenAI } = require("@google/genai");

const apiKey = "AIzaSyDFttgMb2_aFOX_iD0Yn62gtw9CDHO28Ds";

const AI = new GoogleGenAI({
  apiKey,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

async function run(prompt) {
  try {
    const response = await AI.generateText({
      model: "gemini-2.0", // make sure this model exists
      input: prompt,
      ...generationConfig,
    });

    return response.output_text; // this is the text returned
  } catch (error) {
    console.error("Error in Gemini AI:", error);
    return "Error while processing the request";
  }
}

module.exports = run; // use module.exports if using Node.js
