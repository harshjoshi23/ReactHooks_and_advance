import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] =
    useState();
    //   {
    //   name: "harsh",
    //   age: 18,
    //   message: "hello bro",
    // }

  const [name, setName] = useState("harsh");
  const [age, setAge] = useState("22");
  const [message, setMessage] = useState("Wassup2");

  const changeMessage = () => {
    //using a spread operator
    // setPerson({ ...person, message: "Wassup1" });
    setMessage("FinalDestination");
  };
  return (
    <>
      <h3>{name} </h3>
      <h3>{age} </h3>
      <h3>{message} </h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
