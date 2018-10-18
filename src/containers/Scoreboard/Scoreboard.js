import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';

const SCORE_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50, 0];
const REDUCER = (accumulator, currentValue) => accumulator + currentValue;


class Scoreboard extends Component {

    // TODO Remove after dev
    state = {
        players: [
            {id: 0, name: "Player 1", color: "blue", score: 501, ppd: 0, points: 0, darts: 0},
            {id: 1, name: "Player 2", color: "orange", score: 501, ppd: 0, points: 0, darts: 0},
            {id: 2, name: "Player 3", color: "green", score: 501, ppd: 0, points: 0, darts: 0},
            {id: 3, name: "Player 4", color: "red", score: 501, ppd: 0, points: 0, darts: 0}
        ],
        currentRound: {
            player: 0,
            scores: [],
            total: 0,
            darts: 0
        },
        lastRound: {
            player: null,
            total: 0
        },
        scoreMultiplier: 1
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

    toggleDoubleInputHandler = () => {
        this.setState({ scoreMultiplier: this.state.scoreMultiplier !== 2 ? 2 : 1 });
    }

    toggleTripleInputHandler = () => {
        this.setState({ scoreMultiplier: this.state.scoreMultiplier !== 3 ? 3 : 1 });
    }

    setScoreHandler = (e) => {
        let value = e.target.value,
            multiplier = this.state.scoreMultiplier,
            score = value * multiplier;

        const updatedRound = {
            ...this.state.currentRound
        };

        let updatedScores = updatedRound.scores;

        if (updatedRound.scores.length < 3) {
            updatedScores.push(score);
        }

        const scoreTotal = updatedScores.reduce(REDUCER);

        updatedRound.total = scoreTotal;
        updatedRound.darts = updatedScores.length;

        this.updateRound(updatedRound);
    }

    clearRoundHandler = () => {
        const updatedRound = {
            ...this.state.currentRound,
            scores: [],
            total: 0
        }

        this.updateRound(updatedRound);
    }

    updateRound = (updatedRound) => {
        this.setState({
            currentRound: updatedRound,
            scoreMultiplier: 1
        });
    }

    nextRoundHandler = () => {
        const round = this.state.currentRound;
        const players = this.state.players;
        const player = players[round.player];

        let totalDarts = player.darts;

        if (round.darts > 0) {
            totalDarts = player.darts + round.darts;
        }

        // update the player stats
        let updatedPlayer = {
            ...players[round.player],
            score: player.score - round.total,
            points: player.points + round.total,
            darts: totalDarts
        }
        updatedPlayer.ppd = updatedPlayer.points / updatedPlayer.darts;

        if (updatedPlayer.score < 0) {
            updatedPlayer = player;
        }

        // populate last round with current round
        const updatedLastRound = {
            ...round
        };

        //reset current round
        const nextPlayer = round.player === 3 ? 0 : round.player + 1;

        const nextRound = {
            player: nextPlayer,
            scores: [],
            total: 0
        }

        const updatedPlayers = [...players];
        updatedPlayers[round.player] = updatedPlayer;

        this.setState({
            ...this.state,
            players: updatedPlayers,
            currentRound: nextRound,
            lastRound: updatedLastRound
        });

    }

    render () {
        // Check if user is from Options page
        // if (!this.props.isAuth) {
        //     return (
        //         <Redirect to="/" />
        //     );
        // }

        // Set current player to display scores
        let currentPlayer = this.state.players[this.state.currentRound.player];

        // Filtering out current player to display to display scores of other players
        let opponentScores = null;

        if (this.state.players.length > 0) {
            let opponents = this.state.players.filter( player => {
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

        // Setting possible number inputs based on score multiplier
        let scoreNumbers = [...SCORE_NUMBERS];

        if (this.state.scoreMultiplier !== 1 ) {
            scoreNumbers = scoreNumbers.filter( number => {
                return number !== 25 && number !== 50 && number !== 0;
            })
        }

        let inputNumbers = (
            <div className="button__wrapper flex flex-wrap -mx-6">
                {scoreNumbers.map( (number, i) => (
                    <div
                        key={i}
                        className={"input__number " + (number === 0 ? "w-1/2" : "w-1/4") + " px-2 mb-4"}
                    >
                        <button
                            className="button w-full"
                            value={number}
                            onClick={(e) => this.setScoreHandler(e)}
                        >{number === 0 ? 'Miss' : number}</button>
                    </div>
                ))}
            </div>
        )

        // Displays scores of individual darts for current round
        let dartScores = null;

        if (this.state.currentRound.scores.length > 0) {
            const currentScores = this.state.currentRound.scores;
            const playerScore = this.state.players[this.state.currentRound.player].score;

            if (currentScores.reduce(REDUCER) > playerScore) {
                dartScores = (
                    <div>
                        <div className="round__score w-full round__score--bust">
                            <h5>BUST</h5>
                        </div>
                    </div>
                )
            } else {
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
        }



        return (
            <div className="scoreboard-container py-8">
                <div className="scoreboard__display relative pt-4 mb-12">
                    <div className="score-to absolute pin-t pin-l opacity-50">
                        <p>{this.props.scoreCount} Game</p>
                    </div>
                    <div className="scoreboard__player text-center mb-8">
                        <h1 className={'scoreboard__score scoreboard__score--' + currentPlayer.color}>{currentPlayer.score}</h1>
                        <p>PPD : {currentPlayer.ppd.toFixed(2)}</p>
                    </div>
                    {opponentScores}
                </div>
                <div className={'scoreboard__input scoreboard__input--' + currentPlayer.color}>
                    <div className="input__score-type flex flex-start mb-4">
                        <button
                            className={this.state.scoreMultiplier === 2 ? 'button active' : 'button'}
                            onClick={this.toggleDoubleInputHandler}
                        >Double</button>
                        <button
                            className={this.state.scoreMultiplier === 3 ? 'button active' : 'button'}
                            onClick={this.toggleTripleInputHandler}
                        >Triple</button>
                    </div>
                    <div className="input__numbers px-4 mb-8">
                        {inputNumbers}
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
                                <button
                                    className="button button--orange w-full"
                                    onClick={this.clearRoundHandler}
                                >Clear</button>
                            </div>
                            <div className="input__action w-1/3 px-2">
                                <button className="button button--red w-full">Back</button>
                            </div>
                            <div className="input__action w-1/3 px-2">
                                <button
                                    className="button button--green w-full"
                                    onClick={this.nextRoundHandler}
                                >Next</button>
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
