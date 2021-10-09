import React from "react";
import Btn from "./Btn";
import "./Cards.css";

const Cards = ({ accordion }) => {
  const { question, answer } = accordion;
  const [openAnswer, setOpenAnswer] = React.useState(false)
  return (
    <>
      <section className="card">
        <div className="flexed-body">
          <p className="accordion-question">{question}</p>
          <Btn click={setOpenAnswer}/>
        </div>
        {openAnswer && <p className="accordion-answer" onClick={!openAnswer}>{answer}</p>}
      </section>
    </>
  );
};

export default Cards;
