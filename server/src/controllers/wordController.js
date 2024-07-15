import { generateExampleSentences } from "../services/openAiService.js";
import { fetchWordOfTheDay } from "../services/wordService.js";

export const testOpenAiService = async (req, res) => {
  console.log("testOpenAiService called")
  try {
    const word = await fetchWordOfTheDay();
    console.log("Fetched word:", word);

    if (!word) {
      return res.status(400).json({ error: 'Word is required' });
    }

    const sentences = await generateExampleSentences(word);
    res.status(200).json({ word, sentences });
  } catch (error) {
    console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to generate sentences' });
  }
};

