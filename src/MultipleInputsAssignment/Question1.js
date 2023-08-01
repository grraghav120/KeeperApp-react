import React, { useState } from "react";
import "./stylesQ.css";

function Question1() {
    let [contact,setContact]=useState({
        fName:"",
        lName:"",
        email:""
    });

    function handleInput(event){
        let {name,value}=event.target;
        setContact({
            ...contact,
            [name]:value,
        })
    }

    function handleSubmit(event){
        console.log(event);
        event.preventDefault();
    }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={handleInput} value={contact.fName} placeholder="First Name" />
        <input name="lName" onChange={handleInput} value={contact.lName} placeholder="Last Name" />
        <input name="email" onChange={handleInput} value={contact.email} placeholder="Email" />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Question1;
