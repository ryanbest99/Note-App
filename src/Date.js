import React from "react";

function Date() {
  function join(t, a, s) {
    function format(m) {
      let f = new Intl.DateTimeFormat("en", m);
      return f.format(t);
    }
    return a.map(format).join(s);
  }

  let a = [{ day: "numeric" }, { month: "short" }, { year: "numeric" }];
  let s = join(new Date(), a, "-");

  return (
    <div>
      <p>{s}</p>
    </div>
  );
}

export default Date;
