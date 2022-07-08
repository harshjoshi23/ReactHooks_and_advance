import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "harsh",
    age: 18,
    message: "hello bro",
  });

  const changeMessage = () => {
    //invoking set person
    setPerson("HelloWorld");
  };
  return (
    <>
      <h3>{person.name} </h3>
      <h3>{person.age} </h3>
      <h3>{person.message} </h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
