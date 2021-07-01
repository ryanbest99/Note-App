import React from "react";
// import Date from "./Date";

function Card() {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date();
  const today2 = date.toLocaleDateString("en-US", options);

  return (
    <article className="note">
      <div className="note-text">
        <p>This is a note</p>
        <input type="text" className="note-input" />
      </div>
      <div className="note-bottom">
        <div className="note-date">
          <p>{today2}</p>
        </div>
        <div className="note-delete">
          <button>Remove</button>
        </div>
      </div>
    </article>
  );
}

export default Card;
