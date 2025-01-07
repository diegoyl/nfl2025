import './Form.css';
// import Name from './Name.js';
import MLexample from './img/logo/MLexample.png'
import TDexample from './img/logo/TDexample.png'

function HelpPage({handleHelpClick}) {

    // do stuff with props

    return (
        <div className="helpContainer">

            <button className="helpButton helpHelpButton"
                onClick={() => {handleHelpClick(false)}}
                >X</button>

            <p className='subtitle'>HOW TO PLAY</p>
            <p>For each game you will make three selections: <br></br> <br></br></p>

            <p>* The <strong>WINNER</strong></p>
            <p>* And two <strong>TOUCHDOWN SCORERS</strong>, <br></br>one from each team<br></br> <br></br></p>
            <p>!!! Make sure to make all 3 picks on each page before advancing !!!<br></br><br></br></p>
            <p>You can only gain points and will not lose points for losing picks. </p>

            <br></br>
            <br></br>
            <p className='subtitle'>POINTS</p>
            <p>On average you will be awarded 100 Points for picking the correct winner. But for each game, the points are weighted by team strength. 
                The favorite will win you less points, while picking the underdog can win you more points.
            </p>
            <img src={MLexample} width="80%"/>
            <br></br>
            <p>TD Scorers also award different points depending on how likely they are to score. A 50% chance to score translates to 20 Points.
            </p>
            <img src={TDexample} width="60%"/>
            <p>* Passing TDs do not count, but QBs can still score with Rushing/Receving TDs. </p>
            <p>* Scoring more than one TD does not give you additional points</p>
            <p>* D/ST = Defense or Special Teams, you are awarded points for any Defensive TD or Kick/Punt Return TD</p>
            <br></br>
            <p className='subtitle'>STRATEGY</p>
            <p>You can pick safer options like the Chiefs to win or Derrick Henry to score a TD, but you will receive smaller rewards. If you go for longshots like the Broncos or a backup WR to score a TD, you could make up big deficits in the standings! A good strategy could be to pick a mix of favorites and underdogs.
            </p>
            <br></br><br></br><br></br><br></br>

            <button className="helpButton helpHelpButtonBottom"
                onClick={() => {handleHelpClick(false)}}
                >BACK</button>
            <br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br>
        </div>
    );
}
  
export default HelpPage;