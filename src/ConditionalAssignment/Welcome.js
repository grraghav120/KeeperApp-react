import React from "react";
import Form from "./Form";
import './Welcome.css';

var userIsRegistered = false;
let btnName="Register"
if(userIsRegistered) btnName="Login";

function Welcome() {
  return (
    <div className="container">
      <Form btnName={btnName}/>
    </div>
  );
}

export default Welcome;
