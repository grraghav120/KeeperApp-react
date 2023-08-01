import React, { useState } from "react";
import '../App.css';

function NoteAdd(props) {
  let [note,setNote]=useState({
    title:"",
    content:""    
  });


  function handleInput(event){
    let {name,value}=event.target;
    setNote({
      ...note,
      [name]:value,
    })
  }

  function onAddNote(event){
    const newNote={
      id:new Date().getTime(),
      title:note.title,
      content:note.content
    }
    props.noteData(newNote)
    event.preventDefault();
  }

  return (
    <div className="addNote">
      <form>
        <input placeholder="Title" onChange={handleInput} value={note.title} name="title" />
        <textarea name="content" value={note.content} onChange={handleInput} placeholder="Take a note...."></textarea>
        <button onClick={onAddNote}>Add</button>
      </form>
    </div>
  );
}

export default NoteAdd;
