import './Review.css';
import './Form.css';
import ReviewRow2 from './ReviewRow2.js';

function CurrentGameTable({cur_game_data, curGameIdx, picksArchiveDict}) {

    // do stuff with props
    console.log("1. cur_game_data: ", cur_game_data)
    // console.log("2. 'Diego' : ", picksArchiveDict["DIEGO"])
    // console.log("3. '[0]]' : ", picksArchiveDict["DIEGO"][0])

    const homeCode = cur_game_data["team_code"]["home"]
    const homeName = cur_game_data["team_name"]["home"]
    const awayCode = cur_game_data["team_code"]["away"]
    const awayName = cur_game_data["team_name"]["away"]


    return (
        <div className="curPicksContainer">
            <p className='roundTitle'>NEXT GAME</p>
            <div className='curMatchup'>
                <div className={homeCode+' matchupHalf matchupLeft'}>
                    <p>{homeName}</p>
                </div>
                <div className={awayCode+' matchupHalf matchupRight'}>
                    <p>{awayName}</p>
                </div>

            </div>



            <div className="curPicksRow">
                <div className="curPicksCol cpLeft">
                    <p className='roundTitle curRT'>A</p>
                </div>
                <div className="curPicksCol cpRight">
                    <ReviewRow2 game_picks={[0,picksArchiveDict["ANDRES"][curGameIdx]]}></ReviewRow2>
                </div>
            </div>
            <div className="curPicksRow">
                <div className="curPicksCol cpLeft">
                    <p className='roundTitle curRT'>AP</p>
                </div>
                <div className="curPicksCol cpRight">
                    <ReviewRow2 game_picks={[0,picksArchiveDict["ANA PAULA"][curGameIdx]]}></ReviewRow2>
                </div>
            </div>
            <div className="curPicksRow">
                <div className="curPicksCol cpLeft">
                    <p className='roundTitle curRT'>F</p>
                </div>
                <div className="curPicksCol cpRight">
                    <ReviewRow2 game_picks={[0,picksArchiveDict["FABIAN"][curGameIdx]]}></ReviewRow2>
                </div>
            </div>
            <div className="curPicksRow">
                <div className="curPicksCol cpLeft">
                    <p className='roundTitle curRT'>D</p>
                </div>
                <div className="curPicksCol cpRight">
                    <ReviewRow2 game_picks={[0,picksArchiveDict["DIEGO"][curGameIdx]]}></ReviewRow2>
                </div>
            </div>
            <div className="curPicksRow">
                <div className="curPicksCol cpLeft">
                    <p className='roundTitle curRT'>M</p>
                </div>
                <div className="curPicksCol cpRight">
                    <ReviewRow2 game_picks={[0,picksArchiveDict["MAMI"][curGameIdx]]}></ReviewRow2>
                </div>
            </div>
            <div className="curPicksRow">
                <div className="curPicksCol cpLeft">
                    <p className='roundTitle curRT'>P</p>
                </div>
                <div className="curPicksCol cpRight">
                    <ReviewRow2 game_picks={[0,picksArchiveDict["PAPI"][curGameIdx]]}></ReviewRow2>
                </div>
            </div>



        </div>
    );
}
  
export default CurrentGameTable;