import './Form.css';


function TDRow({idx, activeTDidxs, data, side, team, handleTD}) {
    const pos = data[0]
    const name = data[1]
    const pts = data[2]
    console.log(team)

    let activeTD = false
    if (activeTDidxs.includes(idx)) {
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
                <p className="tdPos">{pos}</p>
                <p className="tdName">{name}</p>
                <p className="tdPts">{pts}<p className="plus">+</p></p>
            </button>
        </>
    );
}
  
export default TDRow;