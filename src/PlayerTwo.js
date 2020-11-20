import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from "react";
import axios from 'axios';
import Player from './Player.js';


function PlayerTwo(props) {

    //.log(props)
    const [playerNameTwo, setPlayerNameTwo] = useState("");
    const statRef = useRef()
    const [queryTwo, setQueryTwo] = useState("")
    const [playerInfoTwo, setPlayerInfoTwo] = useState([])
    const [playerStatsTwo, setPlayerStatsTwo] = useState({});
    const [displayTwo, setDisplayTwo] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault();
        props.getNameTwo(queryTwo)
        //.log(playerNameTwo)
        //.log(playerStatsTwo)
    }







    const onType = (e) => {
        setQueryTwo(e.target.value);
        //.log(queryTwo)
        // setPlayerNameTwo(queryTwo);
    };
    // const getStats = (playerId) => {
    //     const response = axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`)
    //         .then(async (res) => {
    //             //.log(res.data)
    //             setPlayerStatsTwo(res?.data?.data[0])
    //             //.log(playerStatsTwo.pts)
    //         }).catch(err => {
    //             //.log(err)
    //         })
    // }
    // const getName = async (search) => {
    //     const result = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerNameTwo}`)
    //         .then(async (res) => {
    //             //.log(res.data)
    //             setPlayerInfoTwo(res?.data?.data)
    //             //.log(playerInfoTwo)
    //             if (res.data.data[0] === undefined) {
    //                 alert("This Player is either injured or not playing")
    //             }
    //             else if (res.data.data.length > 1) {
    //                 alert("Please specify the name more")
    //             }
    //             else {
    //                 await getStats(res.data.data[0].id)
    //             }
    //         })
    //         .catch(err => {
    //             //.log(err)
    //         })
    // }



    return (
        <div>
            <div className="App">

                <form className="search" onSubmit={handleSubmit}>
                    <label>
                        <input className='input' type="text" onChange={onType} value={queryTwo} placeholder="Enter Player Name">
                        </input>
                    </label>
                    <input type="submit" value="Submit" className='thing' ></input>
                </form>

            </div>
            <div>

                {props.playerInfoTwo?.map((info) => (

                    <ul className='statdisplay'>
                        <img className='bluedude' src='./bluedude.png'></img>

                        <h3> First Name: {info.first_name} </h3>
                        <h3> Last Name: {info.last_name}</h3>
                        <h3 className='stat'>Games Played: {props.playerStatsTwo.games_played}</h3>
                        <h3 ref={statRef} className='stat'>PPG: {props.playerStatsTwo.pts}</h3>
                        <h3 className='stat'>APG: {props.playerStatsTwo.ast}</h3>
                        <h3 className='stat'>RPG: {props.playerStatsTwo.reb}</h3>
                        <h3 className='stat'>3p%: {props.fg3_pct}</h3>
                        <h3 className='stat'>FG%: {props.fg_pct}</h3>

                    </ul>

                ))}

            </div>
            <div>


            </div>
        </div>
    );

}
export default PlayerTwo;