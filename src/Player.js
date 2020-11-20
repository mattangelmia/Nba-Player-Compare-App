import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from "react";
import axios from 'axios';
import PlayerTwo from './PlayerTwo';
function Player(props) {

    ////.log(props)
    const [playerName, setPlayerName] = useState("");
    const statRef = useRef()
    const [query, setQuery] = useState("")
    const [playerInfo, setPlayerInfo] = useState([])
    const [playerStats, setPlayerStats] = useState({});
    const [display, setDisplay] = useState(false)




    const handleSubmit = (e) => {
        e.preventDefault();

        props.getName(query)
        ////.log(playerName)
        ////.log(playerStats)
    }
    const onType = (e) => {
        setQuery(e.target.value);
        // setPlayerName(query);
    };
    // const getStats = (playerId) => {
    //     const response = axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`)
    //         .then(async (res) => {
    //             ////.log(res.data)
    //             setPlayerStats(res?.data?.data[0])
    //             ////.log(playerStats.pts)
    //         }).catch(err => {
    //             ////.log(err)
    //         })
    // }
    // const getName = async (search) => {
    //     const result = await axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)
    //         .then(async (res) => {
    //             ////.log(res.data)
    //             setPlayerInfo(res?.data?.data)
    //             ////.log(playerInfo)
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
    //             ////.log(err)
    //         })
    // }



    return (



        <div>

            <div className="App">

                <form className="search" onSubmit={handleSubmit}>
                    <label>
                        <input className='input' type="text" onChange={onType} value={query} placeholder="Enter Player Name">
                        </input>
                    </label>
                    <input type="submit" value="Submit" className='thing' ></input>
                </form>
            </div>
            <div>

                {props.playerInfo?.map((info) => (

                    <ul className='statdisplay'>
                        <img className='bluedude' src='./bluedude.png'></img>
                        {/* <h1 style={{ backgroundColor: 'red', width: (props.playerStats.games_played / props.playerStatsTwo.games_played) * 100 + 'vw' }}>hi</h1> */}
                        <h3> First name: {info.first_name} </h3>
                        <h3> Last name: {info.last_name}</h3>
                        <h3 className='stat'>Games Played: {props.playerStats.games_played}</h3>
                        <h3 ref={statRef} className='stat'>PPG: {props.playerStats.pts}</h3>
                        <h3 className='stat'>APG: {props.playerStats.ast}</h3>
                        <h3 className='stat'>RPG: {props.playerStats.reb}</h3>
                        <h3 className='stat'>3p%: {props.playerStats.fg3_pct * 100}</h3>
                        <h3 className='stat'>FG%: {(props.playerStats.fg_pct * 100).toFixed(2)}</h3>

                    </ul>

                ))}
                <article className='rightstats'>
                </article>

            </div>
            <div>


            </div>
        </div>
    );

}
export default Player;