import './Review.css';
import './Form.css';
// import Name from './Name.js';
const typeNames = {
    "Color":"Gatorade",
    "MVP":"MVP",
}

function ReviewRow({game_picks, gameDict, type}) {
    console.log("Game Picks: ",game_picks)
    const game_id = game_picks[0]

    const mainPick = game_picks[1][0]

    const typeName = typeNames[type]
    let mainName = false
    let mainPts = false
    const emptyMessage = "No Pick"
    
    let game_data = null;
    for (let i=0; i < gameDict.length; i++) {
        let curID = gameDict[i]["game_id"]
        if (curID === game_id) {
            game_data = gameDict[i]

            if (mainPick != null){
                console.log("RR3 GD: ",type," = ", game_data)
                // console.log("RR3 GD: ",mainPick," = ", game_data[type])
                mainName = game_data[type][mainPick][0]
                mainPts = game_data[type][mainPick][1]
            }
        }
    }
    // console.log("Game Data: ",game_data)

    return (
        <div className="reviewRowContainer rr3">
            <div className='botCol botL reviewColumn'>
                <p className={mainName ? "colName botText" : "colName botText"}>
                    {typeName}
                </p>
            </div>
            <div className='botCol botR reviewColumn'>
            <p className={mainName ? "colName botText" : "colName botText noSelection"}>
                    {mainName ? mainName : emptyMessage}
                </p>
                <p className={mainPts ? "colPts botText" : "colPts botText noSelection"}>
                    {mainPts ? mainPts : 0}+
                </p>
            </div>
        </div>
    );
}
  
export default ReviewRow;