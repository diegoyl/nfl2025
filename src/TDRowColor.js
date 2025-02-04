import './Form.css';


function TDRowColor({idx, activeTDidx, data, side, team, handleTD}) {
    const name = data[0]
    const pts = data[1]
    const gcolor = team
    console.log(data)

    let activeTD = false
    if (idx === activeTDidx) {
        activeTD = true
    }

    return (
        <>
            <button onClick={() => handleTD(side,idx)}
                className={activeTD ? team+" tdActive tdOption " : "tdOption"} 
                style={activeTD ? {"background-color":gcolor, "color":"rgb(14, 18, 18)"} : {"color":gcolor}}
            >
                {/* <div className="tdImgCont">
                    <img src={img_src} height="100%" className="tdImg"/>
                </div> */}
                <p className="mvpName tdName">{name}</p>
                <p className="mvpPts tdPts">{pts}<p className="plus">+</p></p>
            </button>
        </>
    );
}
  
export default TDRowColor;