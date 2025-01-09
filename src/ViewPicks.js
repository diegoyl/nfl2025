import './Review.css';
import ReviewRow from './ReviewRow.js';


function ViewPicks({picksArchiveDict}) {

    // do stuff with props

    return (
        <div className="">
            
            {Object.entries(picksArchiveDict).map(function(game_picks,idx) {
                    if (game_picks[0] != "user"){
                        return (
                            <ReviewRow 
                                key={idx} 
                                game_picks={game_picks}
                                // gameDict={gameDict}
                            ></ReviewRow>
                    )}
            })}
        </div>
    );
}
  
export default ViewPicks;