import React from 'react';
import StandingBar from './components/standingBar/standingBar';
import Round from './components/round/Round';
import data from './InterviewData.json';
import './App.css';

function getRounds(data) {
  let max = 0;

  for (var i = 0; i < data.match.length; i++) {
    max = data.match[i].id.r > max ? data.match[i].id.r : max;
  }

  return max;
}

function separateRounds(data, nbrRounds) {

  let i = 0;
  let splitRound = [];

  for(let round = 1; round <= nbrRounds; round++) {
    splitRound[i] = data.match.filter((match) => match.id.r === round);
    i++;
  }

  return splitRound;
}

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      playerHovered: 0
    }

    this.handleHoverPlayer = this.handleHoverPlayer.bind(this);
  }

  handleHoverPlayer(id){
    this.setState({playerHovered: id})
  }

  render(){
    let maxRound = getRounds(data);
    let roundsSplit = separateRounds(data, maxRound);

    return (
      <div className="container">
        <div className="Bracket">
          <header className="Title">
            Coding Test Tournament
          </header>
          <p className="Subtitle">
            Stage 1 - Pool 1
          </p>
          <div className="standingContainer">
            <table className="standingTable" style={{height: '10%'}}>
              <tbody>
                <tr>
                  <StandingBar
                    maxRound={maxRound}
                  />
                </tr>
              </tbody>
            </table>
            <div className="roundContainer">
            <table className="roundTable" style={{height: '90%'}}>
              <tbody>
                <tr>
                  {roundsSplit.map((item, index) => <Round
                                                      onHoverPlayer={this.handleHoverPlayer}
                                                      playerSelect={this.state.playerHovered}
                                                      key={index}
                                                      roundNbr={index}
                                                      matches={item}
                                                      maxRound={maxRound}
                                                    />)}
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
