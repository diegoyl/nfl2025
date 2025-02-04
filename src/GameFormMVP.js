import React, {useState, useEffect} from 'react';
import './Form.css';
import TDRowMVP from './TDRowMVP.js';
import BAL from "./img/logo/BAL.jpg"
import BUF from "./img/logo/BUF.jpg"
import DEN from "./img/logo/DEN.jpg"
import DET from "./img/logo/DET.jpg"
import GB from "./img/logo/GB.jpg"
import HOU from "./img/logo/HOU.jpg"
import KC from "./img/logo/KC.jpg"
import LAC from "./img/logo/LAC.jpg"
import MIN from "./img/logo/MIN.jpg"
import LAR from "./img/logo/LAR.jpg"
import PIT from "./img/logo/PIT.jpg"
import PHI from "./img/logo/PHI.jpg"
import TB from "./img/logo/TB.jpg"
import WAS from "./img/logo/WAS.jpg"
const logos = {
    "BAL":BAL,
    "BUF":BUF,
    "DEN":DEN,
    "DET":DET,
    "GB":GB,
    "HOU":HOU,
    "KC":KC,
    "LAC":LAC,
    "LAR":LAR,
    "MIN":MIN,
    "PHI":PHI,
    "PIT":PIT,
    "TB":TB,
    "WAS":WAS
}

function GameFormMVP({game_data, selections, updateSelectionsMVPColor, triggerFlash}) {
    var [activeTD, setActiveTD] = useState(selections[0])

    

    // do stuff with props
    console.log("\nNEW GameFormMVP: ",game_data)
    const td_data = game_data["MVP"]
    console.log("td data: ",td_data)


    function handleTD(side,idx) {
        setActiveTD(idx)
    }

    
    useEffect(() => {
        updateSelectionsMVPColor(game_data["game_id"], activeTD);
    },[activeTD]);


    return (
        <div className="gameContainer">

            <div className="instruction">
                Pick the position of the Super Bowl MVP
            </div>

            <div className="tdNotes" >
                <p>
                    <strong>QB:</strong> Mahomes, Hurts
                </p>
                <p>
                    <strong>RB:</strong> Barkley, Pacheco, Hunt, ...
                </p>
                <p>
                    <strong>WR:</strong> Worthy, AJ Brown, Smith, M. Brown, Hopkins, ...
                </p>
                <p>
                    <strong>TE:</strong> Kelce, Goedert, Gray, ...
                </p>
                <p>
                    <strong>Other:</strong> Kickers, Defense, ...
                </p>
            </div>
            <br></br>

            <div id="tdContainer">
                <div id="tdHome" className="tdHalf">
                    {td_data.map(function(data,idx) {
                        return (
                            <TDRowMVP
                                key={idx}
                                idx={idx}
                                activeTDidx={activeTD}
                                data={data}
                                side="home"
                                team={data[0]}
                                handleTD={handleTD}
                            ></TDRowMVP>
                        )
                    })} 
                </div>

                

            </div>


        </div>
    );
}
  
export default GameFormMVP;