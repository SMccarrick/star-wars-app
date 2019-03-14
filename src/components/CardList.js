import React from "react";
import Card from "./Card";

const CardList = ({ people }) => {
  console.log(people.results);
  return (
    <div>
      {people.map(results => (
        <Card key={results.height} name={results.name} />
      ))}
    </div>
  );
};

export default CardList;
