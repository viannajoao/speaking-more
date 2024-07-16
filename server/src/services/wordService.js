import fs from 'fs';
import path from 'path';



// Caminho para o arquivo JSON
const wordsFilePath = path.resolve(path.dirname(''), "./words/words.json");

// Função para carregar as palavras do arquivo JSON
const loadWords = () => {
  if (!fs.existsSync(wordsFilePath)){
    throw new Error(`O arquivo ${wordsFilePath} nao foi encontrado`)
  }
  return JSON.parse(fs.readFileSync(wordsFilePath, 'utf-8'));
};

// Função para salvar as palavras no arquivo JSON
const saveWords = (words) => {
  fs.writeFileSync(wordsFilePath, JSON.stringify(words, null, 2));
};

export const fetchWordOfTheDay = () => {

  let words = loadWords();
  const wordEntry = words.find(word => !word.chamado);

  if (wordEntry) {
    wordEntry.chamado = true;
    saveWords(words);
    console.log(`Selected word: ${wordEntry.word}`);
    return wordEntry.word;
  } else {
    throw new Error('Todas as palavras já foram chamadas.');
  }


};
