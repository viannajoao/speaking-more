import style from "./PrincipalScreen.module.scss";
import { CardScreen } from "../CardScreen/CardScreen";
import { useState } from "react";
import axios from "axios";


export function PrincipalScreen() {

  const [word, setWord] = useState("");
  const [sentence, setSentence] = useState([])
  const [status, setStatus] = useState("Erro ao carregar, tente novamente");
  const [loading, setLoading] = useState(false);

  async function handleWord() {
    if (loading) return; // Evitar múltiplas chamadas
    setLoading(true);
    setStatus("Loading...");
    try {
      const response = await axios.get("https://speaking-more-server-git-main-joao-viannas-projects.vercel.app/word");
      setWord(response.data.word)
      setSentence(response.data.sentences);
      console.log(response.data)
      console.log(response)
    } catch (err) {
      console.error(err);
      setStatus("Erro ao carregar, tente novamente")
    } finally {
      setLoading(false);
    }
  }



  return (
    <>
      <main className={style.default}>
        <h1>Welcome to SpeakingMore</h1>

        <CardScreen sentence={sentence} word={word} status={status} />

        {(sentence != "") ? "" : <button onClick={handleWord}>Buscar palavra do dia</button>}
      </main>

    </>
  )
}