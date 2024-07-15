/* eslint-disable react/prop-types */
import style from "./CardScreen.module.scss";

export function CardScreen({ sentence, word,  status }) {
  return (
    <section className={style.card}>
      {(sentence != "") ?
        <>
          <h3>{word}</h3>
          <p>{sentence[3]}</p>
          <small>{sentence[8]}</small>
          <p>{sentence[4]}</p>
          <small>{sentence[9]}</small>
        </>

        : <span>{status}</span>}
    </section>

  )
}