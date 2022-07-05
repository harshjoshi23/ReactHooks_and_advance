import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  return (
    <>
      {
        //iterate over our array
        people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className="item">
              <h4>
                {id}, {name}{" "}
              </h4>
            </div>
          );
        })
      }
      {/* only to invoke when we click the button
      So we are using an arrowfunction to achieve that
      The button is callin the setPeople function and the value we are adding is 
      an empty array. (Makes Sense.)
      */}
      <button className="btn" onClick={() => setPeople([])}></button>
    </>
  );
};

export default UseStateArray;
