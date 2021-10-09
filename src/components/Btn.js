import React, { useState } from "react";
import "./Cards.css";

const Btn = ({ click }) => {
  const [btn, setBtn] = useState("+");
  const handleDropDown = () => {
    if (btn === "+") {
      setBtn("--");
      click(true);
    } else {
      setBtn("+");
      click(false);
    }
  };

  document.addEventListener("keydown", (e) => {
      if(e.key === "Escape"){
          setBtn("+")
          click(false)
      }
  })
  return (
    <>
      <button className="btn" onClick={handleDropDown}>
        {btn}
      </button>
    </>
  );
};

export default Btn;
