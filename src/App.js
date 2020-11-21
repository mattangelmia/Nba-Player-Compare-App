import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Player from "./Player.js";
import PlayerTwo from "./PlayerTwo.js";
import axios from 'axios';

function App(props) {
  const [playerStats, setPlayerStats] = useState({});
  const [playerStatsTwo, setPlayerStatsTwo] = useState({});
  const [playerInfoTwo, setPlayerInfoTwo] = useState([])
  const [playerName, setPlayerName] = useState("");
  const [playerInfo, setPlayerInfo] = useState([])

  //.log(playerInfo, playerStats)
  console.log(playerStats, playerStatsTwo)

  //Player 1 functions 



  const getStats = (playerId) => {
    const response = axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`)
      .then(async (res) => {
        console.log(res.data)
        setPlayerStats(res?.data?.data[0])
        // console.log(playerStats)
        //.log(playerStats.pts)
      }).catch(err => {
        //.log(err)
      })
  }
  const getName = async (search) => {
    const result = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${search}`)
      .then(async (res) => {
        //.log(res.data)
        setPlayerInfo(res?.data?.data)
        //.log(playerInfo)
        if (res.data.data[0] === undefined) {
          alert("This Player is either injured or not playing")
        }
        else if (res.data.data.length > 1) {
          alert("Please specify the name more")
        }
        else {
          await getStats(res.data.data[0].id)
        }
      })
      .catch(err => {
        //.log(err)
      })
  }

  //Player 2 functions for
  // const getStats = (playerId) => {
  //   const response = axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`)
  //     .then(async (res) => {
  //       //.log(res.data)
  //       setPlayerStats(res?.data?.data[0])
  //       // console.log(playerStats)
  //       //.log(playerStats.pts)
  //     }).catch(err => {
  //       //.log(err)
  //     })
  // }

  const getStatsTwo = (playerId) => {
    const response = axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`)
      .then(async (res) => {
        console.log(res.data)
        setPlayerStatsTwo(res?.data?.data[0])
        console.log(playerStatsTwo)
        //.log(playerStatsTwo.pts)
      }).catch(err => {
        //.log(err)
      })
  }
  const getNameTwo = async (search) => {
    const result = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${search}`)
      .then(async (res) => {

        //.log(res.data)
        setPlayerInfoTwo(res?.data?.data)
        //.log(playerInfoTwo)
        if (res.data.data[0] === undefined) {
          alert("This Player is either injured or not playing")
        }
        else if (res.data.data.length > 1) {
          alert("Please specify the name more")
        }
        else {
          await getStatsTwo(res.data.data[0].id)
        }
      })
      .catch(err => {
        //.log(err)
      })
  }










  //.log(Player)


  return (
    <div className="App">

      <div className='header'>
        <img src="./logo.png" className="logo"></img>
      </div>
      <div className="page">
        <h1>See how the two players match up</h1>
      </div>

      <div className="game">
        <article className="leftstats">
          <Player {...props} getStats={getStats} getName={getName} playerInfo={playerInfo} playerStats={playerStats} playerStatsTwo={playerStatsTwo} />

        </article>
        <article className="leftstats">

          <PlayerTwo {...props} getStatsTwo={getStatsTwo} getNameTwo={getNameTwo} playerInfoTwo={playerInfoTwo} playerStats={playerStats} playerStatsTwo={playerStatsTwo} />

        </article>

      </div>



    </div>
  );
}

export default App;
