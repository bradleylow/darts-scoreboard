import React, { Component } from 'react';
import { connect } from 'react-redux';

class Scoreboard extends Component {

    render () {
        return (
            <div className="scoreboard-container py-24">

            </div>
        );
    }

}

const mapsStateToProps = state => {
    return {
        players: state.scoreboard.players,
        scoreCount: state.scoreboard.scoreCount,
        isAuth: state.scoreboard.isAuth
    };
}

export default connect(mapsStateToProps)(Scoreboard);
