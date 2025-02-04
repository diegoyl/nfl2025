import React, {useState, useEffect} from 'react';
import './Form.css';
import TDRowColor from './TDRowColor.js';
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
const gcolors = [
    "rgb(125, 92, 244)",
    "rgb(210, 255, 85)",
    "rgb(255, 162, 56)",
    "rgb(16, 151, 255)",
    "rgb(255, 61, 87)",
    "rgb(209, 253, 255)"
]
function GameFormColor({game_data, selections, updateSelectionsMVPColor, triggerFlash}) {
    var [activeTD, setActiveTD] = useState(selections[0])

    

    // do stuff with props
    console.log("\nNEW GameFormColor: ",game_data)
    const td_data = game_data["Color"]
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
                Pick the color of <span style={{"color":"rgb(240,130,0)"}}>Gatorade</span> poured on winning coach
            
            </div>

            <div className="tdNotes">
                    <p>
                        * Last time the CHIEFS won, they used PURPLE
                    </p>
                    <p>
                        * Last time the EAGLES won, they used YELLOW
                    </p>
                </div>
            <br></br>

            <div id="tdContainer">
                <div id="tdHome" className="tdHalf">
                    {td_data.map(function(data,idx) {
                        return (
                            <TDRowColor
                                key={idx}
                                idx={idx}
                                activeTDidx={activeTD}
                                data={data}
                                side="home"
                                team={gcolors[idx]}
                                handleTD={handleTD}
                            ></TDRowColor>
                        )
                    })} 
                </div>

                

            </div>


        </div>
    );
}
  
export default GameFormColor;