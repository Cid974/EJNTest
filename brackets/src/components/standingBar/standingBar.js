import React from 'react';
import '../../style/standingBar.css';


class StandingBar extends React.Component{
  constructor(props){
    super(props);

    this.createTitles = this.createTitles.bind(this);
  }

  createTitles = (rounds) => {

    for (var i = 0; i < rounds.length; i++) {
      if (rounds.length - i === 1){
        rounds[i] = <div key={i} className="standingTitle">{`Finals`}</div>
      } else if (rounds.length - i === 2){
        rounds[i] = <div key={i} className="standingTitle">{`Semifinals`}</div>
      } else if (rounds.length - i === 3){
        rounds[i] = <div key={i} className="standingTitle">{`Quarterfinals`}</div>
      } else {
        rounds[i] = <div key={i} className="standingTitle">{`Round ${i+1}`}</div>
      }
    }

    return rounds;
  }

  render(){
    let rounds = new Array(this.props.maxRound);
    rounds = this.createTitles(rounds);

    return(
      <td className="Standing">
        <div className="standingBar">
          {rounds.map(item => item)}
        </div>
      </td>
    )
  }
}

export default StandingBar
