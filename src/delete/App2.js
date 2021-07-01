import React, { useState } from "react";
import { data } from "../data";
import Note from "./Note";

function App2() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");

    const newNote = { id: new Date().getTime().toString(), text };
    setNotes([...notes, newNote]);
    setText("");
  };

  return (
    <>
      <form>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>

      <section className="notepad">
        {notes.map(function (note) {
          return (
            <div className="note-text">
              <h3>{note.text}</h3>
            </div>
          );
        })}
      </section>

      {/* <Note notes={notes} /> */}
    </>
  );
}

export default App2;
