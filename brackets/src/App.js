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
  let round = 1;
  let splitRound = [];

  while(round <= nbrRounds) {
    splitRound[i] = data.match.filter((match) => match.id.r === round);
    i++;
    round++;
  }

  return splitRound;
}

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      playerHovered: 0
    }

    this.handlePlayerChange = this.handlePlayerChange.bind(this);
  }

  handlePlayerChange(id){
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
          <div style={{flexGrow: '1', padding: '2vmin'}}>
            <table style={{height: '10%', width: '100%', tableLayout: 'fixed'}}>
              <tbody>
                <tr style={{height: '10%'}}>
                  <StandingBar
                    maxRound={maxRound}
                  />
                </tr>
              </tbody>
            </table>
            <div style={{paddingTop: '4vmin'}}>
            <table style={{height: '90%', width: '100%', tableLayout: 'fixed'}}>
              <tbody>
                <tr>
                  {roundsSplit.map((item, index) => <Round
                                                      onPlayerChange={this.handlePlayerChange}
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
