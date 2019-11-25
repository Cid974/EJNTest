import React from 'react';
import Match from '../match/Match';
import '../../style/Round.css';

class Round extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      playerHovered: 0,
    }

    this.handleHoverPlayer = this.handleHoverPlayer.bind(this)
  }

  handleHoverPlayer(id){
    this.props.onHoverPlayer(id);
    this.setState({playerHovered: id})
  }

  render(){

    let final = (this.props.matches.length === 1) ? true : false;

    return(
      <td className="Rounds">
        <div className="matchContainer">
          {this.props.matches.map((item, index) => <Match
                                  key={index}
                                  number={item.number}
                                  seed={item.seed}
                                  participant={item.participant}
                                  score={item.score}
                                  onHoverPlayer={this.handleHoverPlayer}
                                  hoveredPlayer={this.props.playerSelect}
                                  isFinal={final}
                                />)}
        </div>
      </td>
    )
  }
}

export default Round;
