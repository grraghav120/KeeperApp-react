import React from "react";
import './Contact.css'
import Image from "./Image";
import Detail from "./Detail";

function Contact(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
            <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Image url={props.imgURL} />
        </div>
        <div className="bottom">
            <Detail info={props.phone} />
            <Detail info={props.email}/>
        </div>
      </div>
    </div>
  );
}

export default Contact;

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
