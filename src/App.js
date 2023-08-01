import logo from "./logo.svg";
import "./App.css";
// import './MappingAssignment/emoji.css'
import Header from "./Question1/Header";
import Footer from "./Question1/Footer";
import Note from "./Question1/Note"
import notes from "./Question1/notesAll.js";
import NoteAdd from "./Question1/NoteAdd";
import { useState } from "react";
// import Card from "./Question2/Card";
// import Contact from "./PropsAssignment/Contact";
// import contacts from "./PropsAssignment/contacts.js";
// import Image from "./PropsAssignment/Image";
// import Emoji from "./MappingAssignment/Emoji";
// import HeadingEmoji from './MappingAssignment/HeadingEmoji';

function App() {
  return (
    <div>
      <Header />
      <NoteAdd />
      {notes.map((note) => (
        <Note key={note.id} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>

    // <div>
    //   {/* <Card class="my-style" name="beyonce" alt="photo" phone="123 456 789" email="abc@gmail.com"/> */}
    // </div>

    // <div>
    //   {/* <Emoji /> */}
    // </div>
  );
}

export default App;
