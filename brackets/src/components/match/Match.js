import React from 'react';
import Participant from '../participant/Participant';
import '../../style/Match.css';

class Match extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      player: 0,
      position: 0
    }

    this.handleHoverPlayer = this.handleHoverPlayer.bind(this);
  }

  handleHoverPlayer(id){
    this.props.onHoverPlayer(id);
    this.setState({player: id});
  }

  render() {
    let nbrMatch = this.props.number;

    let seed1 = this.props.seed[0] !== null ? this.props.seed[0] : "";
    let seed2 = this.props.seed[1] !== null ? this.props.seed[1] : "";

    let fighter1 = this.props.participant[0].name !== null ? this.props.participant[0] : {_id: "", name: ""};
    let fighter2 = this.props.participant[1].name !== null ? this.props.participant[1] : {_id: "", name: ""};

    let result1 = this.props.score[0] !== null ? this.props.score[0] : "";
    let result2 = this.props.score[1] !== null ? this.props.score[1] : "";

    let winner1, winner2;
    (result1 > result2) ? winner1 = true : winner2 = true;


    return (
        <div className="Match">
          <div className="matchNbr">
            {nbrMatch}
          </div>
          <div className="matchDetails">
            <div className="participant1">
              <Participant
                fighterID={fighter1._id}
                seed={seed1}
                fighter={fighter1.name}
                result={result1}
                onHoverPlayer={this.handleHoverPlayer}
                hoverID={this.props.hoveredPlayer}
                isFinal={this.props.isFinal}
                winner={winner1} />
            </div>
            <div className="participant2">
              <Participant
                fighterID={fighter2._id}
                seed={seed2}
                fighter={fighter2.name}
                result={result2}
                onHoverPlayer={this.handleHoverPlayer}
                hoverID={this.props.hoveredPlayer}
                isFinal={this.props.isFinal}
                winner={winner2} />
            </div>
          </div>
        </div>
    )
  }
}

export default Match;
