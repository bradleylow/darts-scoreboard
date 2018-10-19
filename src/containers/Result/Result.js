import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

class Result extends Component {

    render () {
        // Check if user is from Options page
        if (!this.props.isAuth) {
            return (
                <Redirect to="/" />
            );
        }

        return (
            <div className="result-container py-24 text-center">

            </div>
        );
    }
}


const mapsStateToProps = state => {
    return {
        players: state.scoreboard.players,
        winner: state.scoreboard.winner,
        isAuth: state.scoreboard.isAuth
    };
}

export default connect(mapsStateToProps)(Result);
