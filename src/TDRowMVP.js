import './Form.css';


function TDRowMVP({idx, activeTDidx, data, side, team, handleTD}) {
    const name = data[0]
    const pts = data[1]
    console.log(data)

    let activeTD = false
    if (idx === activeTDidx) {
        activeTD = true
    }

    return (
        <>
            <button onClick={() => handleTD(side,idx)}
                className={activeTD ? team+" tdActive tdOption " : "tdOption"} 
            >
                {/* <div className="tdImgCont">
                    <img src={img_src} height="100%" className="tdImg"/>
                </div> */}
                {/* <p className={team+" mvpTeam tdTeam"}>{team}</p> */}
                {/* <p className="mvpPos tdPos">{pos}</p> */}
                <p className="mvpName tdName">{name}</p>
                <p className="mvpPts tdPts">{pts}<p className="plus">+</p></p>
            </button>
        </>
    );
}
  
export default TDRowMVP;