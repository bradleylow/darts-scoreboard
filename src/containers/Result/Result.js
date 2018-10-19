import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

class Result extends Component {

    resetGame = () => {
        this.props.resetGame();
    }


    render () {
        if (!this.props.isAuth) {
            return (
                <Redirect to="/" />
            );
        }

        return (
            <div className="result-container py-8 text-center">
                <div className="result__display relative pt-4 mb-16">
                    <div className="score-to absolute pin-t pin-l opacity-50">
                        <p>{this.props.scoreCount} Game</p>
                    </div>
                    <div className="round-number absolute pin-t pin-r opacity-50">
                        <p>{this.props.roundCount} Rounds</p>
                    </div>
                    <div className={"result__winner result__winner--" + this.props.winner.color + " py-8 mt-6"}>
                        <h5 className="mb-4 uppercase">Winner</h5>
                        <h1 className="mt-0 mb-8">{this.props.winner.name}</h1>
                        <p>PPD : {this.props.winner.ppd.toFixed(2)}</p>
                    </div>
                </div>
                <div className="result__summary px-4 mb-16">
                    <div className="result__players flex flex-wrap -mx-6">
                        {this.props.players.map( (player, i) => (
                            <div key={i} className="result__player w-1/2 px-2 mb-4">
                                <div className={"result__player--" + player.color + " py-4"}>
                                    <h5>{player.name}</h5>
                                    <h1 className="my-4">{player.score}</h1>
                                    <p>PPD : {player.ppd.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="results__actions">
                    <div className="result__action mx-auto w-1/2 px-2">
                        <button
                            className="button button--blue w-full"
                            onClick={this.resetGame}
                        >New Game</button>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        players: state.scoreboard.players,
        winner: state.scoreboard.winner,
        scoreCount: state.scoreboard.scoreCount,
        roundCount: state.scoreboard.roundCount,
        isAuth: state.scoreboard.isAuth
    };
}

const mapDispatchToProps = dispatch => {
    return {
        resetGame: () => dispatch(actions.resetGame())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);
