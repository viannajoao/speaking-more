import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateExampleSentences = async (word) => {
  console.log("Generating example sentences");

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log("GoogleGenerativeAI initialized");

    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log("Model obtained:", model);

    const prompt = `Generate two example sentences using the word "${word}" and translate to Portuguese, but I want the English sentences too, just the sentences.`;
    console.log("Prompt created:", prompt);

    const result = await model.generateContent(prompt);
    console.log("Result obtained:", result);

    const response = await result.response;
    console.log("Response obtained:", response);

    const text = await response.text();
    console.log("Text obtained:", text);

    const sentences = text.split("\n");
    const formattedSentences = {};

    for (let i = 0; i < sentences.length; i++) {
      // Remove os asteriscos no início e no final de cada frase
      const cleanedSentence = sentences[i].trim().replace(/^\*+|\*+$/g, '');
      formattedSentences[i + 1] = cleanedSentence; // Adiciona a frase limpa ao objeto com o índice correto
    }

    return formattedSentences;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
};

