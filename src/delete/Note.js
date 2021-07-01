import React from "react";

function Note({ notes }) {
  return (
    <>
      {notes.map(function (note) {
        return <div>{note.text}</div>;
      })}
    </>
  );
}

export default Note;
