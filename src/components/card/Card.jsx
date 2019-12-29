import React from "react";
import "../card/Card.css";

const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="human pic"
        src={`https://robohash.org/${props.monster.id}/?set=set5&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
export default Card;
