import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, SetText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      SetText("hello world");
    } else {
      SetText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text} </h1>
      <button className="btn" onClick={handleClick}>
        Change Tile
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
