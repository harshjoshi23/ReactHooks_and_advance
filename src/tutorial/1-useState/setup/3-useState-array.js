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
    </>
  );
};

export default UseStateArray;
