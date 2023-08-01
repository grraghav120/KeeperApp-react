import React from "react";
import "../App.css";

function Note(props) {
  return (
    <div className="note">
      <h1>This is the note {props.title}</h1>
      <p>This is the note {props.content}</p>
      <div className="delete-btn">
        <button>Delete</button>
      </div>
    </div>
  );
}
export default Note;
