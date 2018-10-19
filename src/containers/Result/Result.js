import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {

    render () {
        console.log(this.props.players);
        console.log(this.props.winner);

        return (
            <div className="result-container py-24 text-center">

            </div>
        );
    }
}


const mapsStateToProps = state => {
    return {
        players: state.scoreboard.players,
        winner: state.scoreboard.winner
    };
}

export default connect(mapsStateToProps)(Result);
