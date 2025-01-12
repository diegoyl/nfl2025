import React, {useState} from 'react';
import './Review.css';
import ReviewRow2 from './ReviewRow2.js';
import './Form.css';


function ViewPicks({picksArchiveDict, handleVPClick}) {
    const [isOpen, setIsOpen] = useState(false);
    const [curViewUser, setCurViewUser] = useState("ANA PAULA");
    const [curUserPicks, setCurUserPicks] = useState(picksArchiveDict[curViewUser]);
    console.log("\n\npicksArchiveDict: ", picksArchiveDict)
    console.log("\ncurUserPicks: ", curUserPicks)
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleViewItemClick = (user) => {
        setIsOpen(false); // Close the dropdown on item click
        setCurViewUser(user)
        setCurUserPicks(picksArchiveDict[user])
    };

    return (
        <div className="viewContainer">
                <button class="viewHomeButton" onClick={() => handleVPClick(false)} >
                    ←
                </button>
            <div className="dropdownViewPicks dropdown ddShadow">
                
                    <button class="viewDropButton" onClick={toggleDropdown} >
                    ↓ {curViewUser}
                </button>
                
                {isOpen && (
                    <ul className="dropdown-menu ">
                    <div className="shadowDiv"></div>
                    <li onClick={() => handleViewItemClick('ANA PAULA')}>ANA PAULA</li>
                    <li onClick={() => handleViewItemClick('ANDRES')}>ANDRES</li>
                    <li onClick={() => handleViewItemClick('FABIAN')}>FABIAN</li>
                    <li onClick={() => handleViewItemClick('DIEGO')}>DIEGO</li>
                    <li onClick={() => handleViewItemClick('MAMI')}>MAMI</li>
                    <li onClick={() => handleViewItemClick('PAPI')}>PAPI</li>
                    
                    </ul>
                )}
            </div>   


            <p className="roundTitle firstRT">WILD CARD</p>

            {Object.entries(curUserPicks.slice(0,6)).map(function(game_picks,idx) {
                        return (
                            <ReviewRow2 key={idx} game_picks={game_picks}></ReviewRow2>
                        )
            })}

            <p className="roundTitle">DIVISIONAL</p>

            {Object.entries(curUserPicks.slice(6,10)).map(function(game_picks,idx) {
                        return (
                            <ReviewRow2 key={idx} game_picks={game_picks}></ReviewRow2>
                        )
            })}

            <p className="roundTitle">CONFERENCE CHAMP.</p>

            {Object.entries(curUserPicks.slice(10,12)).map(function(game_picks,idx) {
                        return (
                            <ReviewRow2 key={idx} game_picks={game_picks}></ReviewRow2>
                        )
            })}

            <p className="roundTitle">SUPER BOWL LIX</p>

            {Object.entries(curUserPicks.slice(12,13)).map(function(game_picks,idx) {
                        return (
                            <ReviewRow2 key={idx} game_picks={game_picks}></ReviewRow2>
                        )
            })}
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br>

        </div>
    );
}
  
export default ViewPicks;