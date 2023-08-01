import React from "react";

function Card(props) {
  return (
    <div>
      <div className={props.class}>
        <h1>Name: {props.name}</h1>
        <img
          alt={props.alt}
          src={props.src}
        />
        <p>Phone No.: {props.phone}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
}

export default Card;
