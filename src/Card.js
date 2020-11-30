import React from "react";
import "./Card.css";

function Card({ src, title, description, price }) {
  // prop in the functional component appears here
  //props basically our properties that we can pass the components which make them look
  //different but we can reuse them
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
