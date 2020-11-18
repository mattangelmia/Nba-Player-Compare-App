import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import axios from 'axios';


function Player() {
    const [playerName, setPlayerName] = useState("");
    const [query, setQuery] = useState("")
    const [playerInfo, setPlayerInfo] = useState([])
    const [playerStats, setPlayerStats] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        getName()
        console.log(playerName)
        console.log(playerStats)

    }

    // const handleChange = (e) => {
    //     const replace = e.target.value.split(" ").join("_")
    //     if (replace.length > 0) {
    //         setPlayerName(replace)
    //     }
    //     else {
    //         alert("Please type players name")
    //     }
    // }

    const onType = (e) => {
        setQuery(e.target.value);
        setPlayerName(query);

    };


    const getStats = (playerId) => {
        const response = axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`)
            .then(async (res) => {
                console.log(res.data)
                setPlayerStats(res?.data?.data[0])
                console.log(playerStats.pts)

            }).catch(err => {
                console.log(err)
            })
    }
    const getName = async (search) => {
        const result = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
            .then(async (res) => {
                console.log(res.data)
                setPlayerInfo(res?.data?.data)
                console.log(playerInfo)
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
                console.log(err)
            })


    }






    return (
        <div>
            <div className="App">
                <form onSubmit={handleSubmit}>
                    <label>

                        <input type="text" onChange={onType} value={query} placeholder="Enter Player Name">
                        </input>
                    </label>
                    <input type="submit" value="Submit"></input>
                </form>



                <button onClick={getName}>Names</button>
                <button onClick={getStats}>Stats</button>
            </div>
            <div>
                {playerInfo.map((info) => (

                    <ul>

                        <h1>Player Name:</h1>
                        <h3> {info.first_name} {info.last_name}</h3>
                    </ul>
                ))}

            </div>
            <div>
                <h1>Games Played:</h1>
                <h4>{playerStats.games_played}</h4>
                <h1>PPG</h1>
                <h4>{playerStats.pts}</h4>
                
            </div>

        </div>
    );

}

export default Player;
