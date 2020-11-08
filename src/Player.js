import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import axios from 'axios';


function Player() {
    const [playerName, setPlayerName] = useState("");
    const [query, setQuery] = useState("")
    const [playerStats, setPlayerStats] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        getName()
        console.log(playerName)

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
                setPlayerStats(res.data.data[0])
            }).catch(err => {
                console.log(err)
            })
    }
    const getName = () => {
        const result = axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
            .then(async (res) => {
                console.log(res.data)

                await getStats(res.data.data[0].id)
            })
            .catch(err => {
                console.log(err)
            })


    }
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    <h1>Name </h1>
                    <input type="text" onChange={onType} value={query} placeholder="Enter Player Name">
                    </input>
                </label>
                <input type="submit" value="Submit"></input>
            </form>

            <button onClick={getName}>Names</button>
            <button onClick={getStats}>Stats</button>
        </div>
    );
}

export default Player;
