import React, { useState } from "react";
import "./Slide.css";

const data = [
  { title: "Today's workout plan 1", text: "Workout content 1" },
  { title: "Today's workout plan 2", text: "Workout content 2" },
  { title: "Today's workout plan 3", text: "Workout content 3" },
];

const Slide = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const handleButtonClick = (id) => {
    if (id === "0") setSlideNumber(0);
    else if (id === "1") {
      if (slideNumber < 2) setSlideNumber((prev) => prev + 1);
    } else if (id === "-1") {
      if (slideNumber > 0) setSlideNumber((prev) => prev - 1);
    }
  };

  const buttonStyle = {
    color: "black",
    border: "1px solid green",
  };

  const buttonStyleDisabled = {
    color: "gray",
    border: "1px solid transparent",
    cursor: "not-allowed",
  };

  return (
    <div className="slide">
      <div className="slide-buttons">
        <button
          onClick={() => handleButtonClick("0")}
          style={slideNumber === 0 ? buttonStyleDisabled : buttonStyle}
          className="slide-button"
        >
          Restart
        </button>
        <button
          onClick={() => handleButtonClick("-1")}
          style={slideNumber === 0 ? buttonStyleDisabled : buttonStyle}
          className="slide-button"
        >
          Prev
        </button>
        <button
          onClick={() => handleButtonClick("1")}
          style={slideNumber === 2 ? buttonStyleDisabled : buttonStyle}
          className="slide-button"
        >
          Next
        </button>
      </div>
      <div className="main-slide">
        <h1>{data[slideNumber].title}</h1>
        <h5>{data[slideNumber].text}</h5>
      </div>
    </div>
  );
};

export default Slide;
