import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Player from "./Player.js";

function App() {

  return (
    <div className="App">
      <h1>Who's the better Player?</h1>
      <Player></Player>
    </div>
  );
}

export default App;
