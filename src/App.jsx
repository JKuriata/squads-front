import React from "react";
import "./index.css"; // Assuming main.css is in the same directory as this component

function App() {
  return (
    <div>
      <div id="navbar">
        <h3>Squads</h3>
        <p>login</p>
      </div>
      <div className="container">
        <div className="slides slide1">
          <h1>SQUADS</h1>
        </div>
        <div className="slides slide2"></div>
        <div className="slides slide3">
          <h2>Sign-up</h2>
          <input type="username" />
          <input type="password" />
        </div>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
