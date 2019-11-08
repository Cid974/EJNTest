import React from 'react';
import '../../style/Participant.css';

let styles = {
  player: {
    hover: {
      true: {
        backgroundColor: '#4464c5',
        color: 'white'
      },
      false: {
        backgroundColor: '#2e2f32'
      }
    }
  },
  seed: {
    hover: {
      true: {
        color: '#2e2f32'
      },
      false: {
        color: '#4464c5'
      }
    }
  }
};

class Participant extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hover: false,
      player: 0
    }

    this.renderWinner = this.renderWinner.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  renderWinner(){

    let winner;
    let color = (this.props.isFinal && this.props.winner) ? '#db6950' : '#4464c5'

    winner = (this.props.winner) ?  <div className="result" style={{backgroundColor: color, borderLeft: '1px solid #4464c5'}}>
                                      <span>{this.props.result}</span>
                                    </div>
                                  : <div className="result" style={{backgroundColor: '#2e2f32', borderLeft: '1px solid #4464c5'}}>
                                      <span>{this.props.result}</span>
                                    </div>

    return winner;
  }

  toggleHover(id){
    this.props.onHoverPlayer(id);
    this.setState({hover: !this.state.hover, player: id});
  }

  render(){

    let selectPlayer = (this.props.hoverID === this.props.fighterID) ? {player: {...styles.player.hover[true]},
                                                                          seed: {...styles.seed.hover[true]}}
                                                                      : {player: {...styles.player.hover[this.state.hover]},
                                                                          seed: {...styles.seed.hover[this.state.hover]}}

    let finalWinnerStyle = {};

    if (this.props.isFinal && this.props.winner){
      finalWinnerStyle = {border: '1px solid #db6950'};
    } else {
      finalWinnerStyle = {border: '1px solid #4464c5'}
    }

    return(
      <div className="participantContainer" style={finalWinnerStyle}>
        <div className="participant"
          style={selectPlayer.player}
          onMouseEnter={() => this.toggleHover(this.props.fighterID)}
          onMouseLeave={() => this.toggleHover(0)}>
          <span className="seed"
            style={selectPlayer.seed}>
            {this.props.seed}
          </span>
          <span className="fighter">{this.props.fighter}</span>
        </div>
        {this.renderWinner()}
      </div>
    )
  }
}

export default Participant
