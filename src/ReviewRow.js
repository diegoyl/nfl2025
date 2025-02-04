import './Review.css';
import './Form.css';
// import Name from './Name.js';


function ReviewRow({game_picks, gameDict}) {
    console.log("Game Picks: ",game_picks)
    const game_id = game_picks[0]

    const mlPick = game_picks[1][0]
    let mlSide = null 
    if (mlPick === 0) {
        mlSide = "home"
    } else if  (mlPick === 1) {
        mlSide = "away"
    } 
    const tdhPick = game_picks[1][1][0]
    const tdaPick = game_picks[1][2][0]
    const tdhPick2 = game_picks[1][1][1]
    const tdaPick2 = game_picks[1][2][1]

    let mlName = false
    let mlCodeClass = "noPickColor"
    let mlPts = false
    let tdhName = false
    let tdhPts = false
    let tdaName = false
    let tdaPts = false
    let tdhName2 = false
    let tdhPts2 = false
    let tdaName2 = false
    let tdaPts2 = false
    const emptyMessage = "No Pick"
    
    let game_data = null;
    for (let i=0; i < gameDict.length; i++) {
        let curID = gameDict[i]["game_id"]
        if (curID === game_id) {
            game_data = gameDict[i]

            if (mlSide){
                mlName = game_data["team_name"][mlSide]
                mlPts = game_data["ML"][mlSide]
                mlCodeClass = game_data["team_code"][mlSide]
            }
            if (tdhPick != null){
                tdhName = game_data["TD"]["home"][tdhPick][1]
                tdhPts = game_data["TD"]["home"][tdhPick][2]
            }
            if (tdaPick != null){
                tdaName = game_data["TD"]["away"][tdaPick][1]
                tdaPts = game_data["TD"]["away"][tdaPick][2]
            }
            if (tdhPick2 != null){
                tdhName2 = game_data["TD"]["home"][tdhPick2][1]
                tdhPts2 = game_data["TD"]["home"][tdhPick2][2]
            }
            if (tdaPick2 != null){
                tdaName2 = game_data["TD"]["away"][tdaPick2][1]
                tdaPts2 = game_data["TD"]["away"][tdaPick2][2]
            }
        }
    }
    // console.log("Game Data: ",game_data)

    return (
        <div className="reviewRowContainer rr1">
            <div className={mlCodeClass+' reviewColumn fullCol'}>
                <p className={mlName ? "colName topText" : "colName topText noSelection"}>
                    {mlName ? mlName : emptyMessage}
                </p>
                <p className={mlPts ? "colPts topText" : "colPts topText noSelection"}>
                    +{mlPts ? mlPts : 0}
                </p>
            </div>
            <div style={{height:"1.4em"}}></div>
            <div className='botCol topL reviewColumn fullColTD fullCol topRad'>
                <p className={tdhName ? "colName botText" : "colName botText noSelection"}>
                    {tdhName ? tdhName : emptyMessage}
                </p>
                <p className={tdhPts ? "colPts botText" : "colPts botText noSelection"}>
                    {tdhPts ? tdhPts : 0}+
                </p>
            </div>
            <div className='botCol topR reviewColumn fullColTD fullCol'>
            <p className={tdaName ? "colName botText" : "colName botText noSelection"}>
                    {tdaName ? tdaName : emptyMessage}
                </p>
                <p className={tdaPts ? "colPts botText" : "colPts botText noSelection"}>
                    {tdaPts ? tdaPts : 0}+
                </p>
            </div>
            <div className='botCol botL reviewColumn fullColTD fullCol'>
                <p className={tdhName2 ? "colName botText" : "colName botText noSelection"}>
                    {tdhName2 ? tdhName2 : emptyMessage}
                </p>
                <p className={tdhPts2 ? "colPts botText" : "colPts botText noSelection"}>
                    {tdhPts2 ? tdhPts2 : 0}+
                </p>
            </div>
            <div className='botCol botR reviewColumn fullColTD fullCol botRad'>
            <p className={tdaName2 ? "colName botText" : "colName botText noSelection"}>
                    {tdaName2 ? tdaName2 : emptyMessage}
                </p>
                <p className={tdaPts2 ? "colPts botText" : "colPts botText noSelection"}>
                    {tdaPts2 ? tdaPts2 : 0}+
                </p>
            </div>
        </div>
    );
}
  
export default ReviewRow;