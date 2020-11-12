import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Player from "./Player.js";

function App() {

  return (
    <div className="App">
    
    <div className= 'header'>
    <img src ="./logo.png" className="logo"></img>
    </div>
    <div className = "page">
    <h1>See how they level up</h1>
    </div>

    <div className= "game">
    <article>
    <Player></Player>
    </article>

    <article>
    <Player></Player>
    </article>

    </div>
 
     
      
    </div>
  );
}

export default App;
