import React, { useState } from "react";
import NavBar from "./components/NavBar";
import People from "./components/People";
import Planets from "./components/planets/Planets";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <div className="App">
      <h1><span role="img" aria-label="star emoji">✨</span>Star Wars<span role="img" aria-label="star emoji">✨</span></h1>
      <NavBar setPage={setPage}/>
      <div className="content">{page === "planets" ? <Planets /> : <People />}</div>
    </div>
  );
}

export default App;
