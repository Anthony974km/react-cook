import React, { useState } from "react";
import Recipe from "./components/Recipe";

const App = () => {
  let [searchInput, setSearchInput] = useState("chicken");

  return (
    <div className="app">
      <div className="header-container">
        <h1>React Cook</h1>
        <input
          type="text"
          placeholder="Tappez le nom d'un plat"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="recipes-container">
        <Recipe search={searchInput} />
      </div>
    </div>
  );
};

export default App;