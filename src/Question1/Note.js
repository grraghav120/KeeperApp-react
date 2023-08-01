import React from "react";
import "../App.css";

function Note(props) {
  
  function deleteNote(event){
    console.log(props.id);
    let updateArray=[];
    props.arr.filter((x)=>{
      if(x.id!==props.id) updateArray.push(x);
    })
    props.notesArr(updateArray)
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div>
        <button onClick={deleteNote}>Delete</button>
      </div>
    </div>
  );
}
export default Note;
