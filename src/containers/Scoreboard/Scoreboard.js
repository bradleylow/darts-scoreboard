import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';

const SCORE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50];

class Scoreboard extends Component {

    // TODO Remove after dev
    state = {
        players: [
            {id: 0, name: "Player 1", color: "blue", score: 501, ppd: 0},
            {id: 1, name: "Player 2", color: "orange", score: 501, ppd: 0},
            {id: 2, name: "Player 3", color: "green", score: 501, ppd: 0},
            {id: 3, name: "Player 4", color: "red", score: 501, ppd: 0}
        ],
        currentRound: {
            player: 0,
            scores: [],
            total: 0,
            scoreType: 1,
        },
        lastRound: {
            player: null,
            total: 0
        }
    }

    // state = {
    //     players: this.props.players,
    //     currentPlayer: 0,
    //     currentRound: {
    //         scores: [],
    //         total: 0,
    //         scoreType: 1,
    //     }
    // }

    componentDidMount () {
        // console.log(this.state);
    }

    render () {
        // Check if user is from Options page
        // if (!this.props.isAuth) {
        //     return (
        //         <Redirect to="/" />
        //     );
        // }
        let currentPlayer = this.state.players[this.state.currentRound.player];

        let opponentScores = null;

        if (this.state.players.length > 0) {
            let opponents = this.state.players.filter( (player) => {
                return player.id !== currentPlayer.id;
            });

            opponentScores = (
                <div className="scoreboard__opponents flex justify-center">
                    {opponents.map( (opponent, i) => (
                        <div key={i} className={"scoreboard__opponent scoreboard__opponent--" + opponent.color}>
                            <h4>{opponent.score}</h4>
                        </div>
                    ))}
                </div>
            )
        }

        let dartScores = null;

        if (this.state.currentRound.scores.length > 0) {
            dartScores = (
                <Aux>
                    {this.state.currentRound.scores.map( (score, i) => (
                        <div key={i} className="round__score">
                            <h5>{score}</h5>
                        </div>
                    ))}
                </Aux>
            )
        }

        return (
            <div className="scoreboard-container py-8">
                <div className="scoreboard__display relative pt-4 mb-12">
                    <div className="score-to absolute pin-t pin-l opacity-50">
                        <p>{this.props.scoreCount} Game</p>
                    </div>
                    <div className="scoreboard__player text-center mb-8">
                        <h1 className={'scoreboard__score scoreboard__score--' + currentPlayer.color}>{currentPlayer.score}</h1>
                        <p>PPD : {currentPlayer.ppd}</p>
                    </div>
                    {opponentScores}
                </div>
                <div className={'scoreboard__input scoreboard__input--' + currentPlayer.color}>
                    <div className="input__score-type flex flex-start mb-4">
                        <button className={this.state.currentRound.scoreType === 2 ? 'button active' : 'button'}>Double</button>
                        <button className={this.state.currentRound.scoreType === 3 ? 'button active' : 'button'}>Triple</button>
                    </div>
                    <div className="input__numbers px-4 mb-8">
                        <div className="button__wrapper flex flex-wrap -mx-6">
                            {SCORE_NUMBERS.map( (number, i) => (
                                <div key={i} className="input__number w-1/4 px-2 mb-4">
                                    <button className="button w-full" value={number}>{number}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="round__container px-12 mb-8">
                        <div className="round__scores flex justify-center mb-8">
                            {dartScores}
                        </div>
                        <div className="round__total flex justify-center items-center">
                            <h5 className="opacity-50 mr-4">Round Score:</h5>
                            <h4>{this.state.currentRound.total}</h4>
                        </div>
                    </div>
                    <div className="input__actions px-4">
                        <div className="button__wrapper flex flex-wrap -mx-6">
                            <div className="input__action w-1/3 px-2">
                                <button className="button button--orange w-full">Clear</button>
                            </div>
                            <div className="input__action w-1/3 px-2">
                                <button className="button button--red w-full">Back</button>
                            </div>
                            <div className="input__action w-1/3 px-2">
                                <button className="button button--green w-full">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
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
