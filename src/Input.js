import React from "react";

function Input({ contents, setContents }) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date();
  const today2 = date.toLocaleDateString("en-US", options);

  const removeItem = (id) => {
    console.log("removedItem");
    const newContents = contents.filter(function (content) {
      return content.id !== id;
    });
    setContents(newContents);
  };

  return (
    <>
      {contents.map(function (content) {
        const { id, text } = content;
        return (
          <article className="note">
            <div key={id} className="note-text">
              <h3>{text}</h3>
            </div>
            <div className="note-bottom">
              <div className="note-date">
                <p>{today2}</p>
              </div>
              <div className="note-delete">
                <button onClick={() => removeItem(id)}>Remove</button>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default Input;
