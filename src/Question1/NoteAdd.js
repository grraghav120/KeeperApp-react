import React, { useState } from "react";
import '../App.css';
import notes from "./notesAll";

function NoteAdd() {
  let [note,setNote]=useState({
    title:"",
    content:""    
  });

  let [noteall,setNotes]=useState(notes);

  function handleInput(event){
    let {name,value}=event.target;
    setNote({
      ...note,
      [name]:value,
    })
  }

  function onAddNote(event){
    console.log(note);
    let newNote={
      id:new Date().getTime(),
      title:note.title,
      content:note.content
    }
    console.log(noteall);
    notes.push(newNote);
    setNotes(notes);
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
