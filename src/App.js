import React, { useState } from "react";
import Input from "./Input";
import { data } from "./data";

function App() {
  const [word, setWord] = useState("");
  const [contents, setContents] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hs");

    if (word) {
      const newContent = { id: new Date().getTime().toString(), text: word };
      setContents([...contents, newContent]);
      setWord("");
    }
  };

  return (
    <>
      <form className="">
        <div className="">
          <input
            className="input-field"
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <section className="notepad">
        <Input contents={contents} setContents={setContents} />
      </section>
    </>
  );
}

export default App;
