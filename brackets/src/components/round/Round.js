import React from 'react';
import Match from '../match/Match';
import '../../style/Round.css';

class Round extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      playerHovered: 0,
    }

    this.selectPlayer = this.selectPlayer.bind(this)
  }

  selectPlayer(id){
    this.props.onPlayerChange(id);
    this.setState({playerHovered: id})
  }

  render(){

    let final = (this.props.matches.length === 1) ? true : false;

    return(
      <td className="Rounds">
        <div style={{height: 'auto'}}>
          {this.props.matches.map((item, index) => <Match
                                  key={index}
                                  number={item.number}
                                  seed={item.seed}
                                  participant={item.participant}
                                  score={item.score}
                                  onPlayerSelect={this.selectPlayer}
                                  hoveredPlayer={this.props.playerSelect}
                                  isFinal={final}
                                />)}
        </div>
      </td>
    )
  }
}

export default Round;
