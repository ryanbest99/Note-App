import React from "react";
// import Date from "./Date";

function Card() {
  function join(t, a, s) {
    function format(m) {
      let f = new Intl.DateTimeFormat("en", m);
      return f.format(t);
    }
    return a.map(format).join(s);
  }

  let a = [{ day: "numeric" }, { month: "short" }, { year: "numeric" }];
  let s = join(new Date(), a, "-");
  console.log(s);

  return (
    <article className="note">
      <div className="note-text">
        <p>This is a note</p>
      </div>
      <div className="note-bottom">
        <div className="note-date">{s}</div>
        <div className="note-delete">
          <button>Remove</button>
        </div>
      </div>
    </article>
  );
}

export default Card;
