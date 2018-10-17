import React, { Component } from 'react';

import RadioButton from './../../components/UI/Form/RadioButton/RadioButton';

class Options extends Component {

    state = {
        players: 1,
        scoreCount: '301'
    }

    updatePlayerListHandler = (e) => {
        let players = parseInt(e.target.value);

        this.setState({ players: players });
    }

    updateScoreCountHandler = (e) => {
        let scoreCount = e.target.value;

        this.setState({ scoreCount: scoreCount })
    }

    startGameHandler = () => {
        console.log(this.state);
    }

    render () {
        return (
            <div className="options-container py-24 text-center">
                <h1>Darts 01 Game</h1>
                <div className="options__players mb-12">
                    <h5 className="mb-4">Select Number of Players:</h5>
                    <div className="options__select">
                        <form onChange={(e) => {this.updatePlayerListHandler(e)}}>
                            <RadioButton
                                classList={'options__button ' + (this.state.players === 1 ? 'selected' : '')}
                                label="1"
                                name="players"
                                value="1"
                            />
                            <RadioButton
                                classList={'options__button ' + (this.state.players === 2 ? 'selected' : '')}
                                label="2"
                                name="players"
                                value="2"
                            />
                            <RadioButton
                                classList={'options__button ' + (this.state.players === 3 ? 'selected' : '')}
                                label="3"
                                name="players"
                                value="3"
                            />
                            <RadioButton
                                classList={'options__button ' + (this.state.players === 4 ? 'selected' : '')}
                                label="4"
                                name="players"
                                value="4"
                            />
                        </form>
                    </div>
                </div>
                <div className="options__scoring">
                    <h5 className="mb-4">Select Game Scoring:</h5>
                    <div className="options__select">
                        <form onChange={(e) => {this.updateScoreCountHandler(e)}}>
                            <RadioButton
                                classList={'options__button ' + (this.state.scoreCount === '301' ? 'selected' : '')}
                                label="301"
                                name="players"
                                value="301"
                            />
                            <RadioButton
                                classList={'options__button ' + (this.state.scoreCount === '501' ? 'selected' : '')}
                                label="501"
                                name="players"
                                value="501"
                            />
                            <RadioButton
                                classList={'options__button ' + (this.state.scoreCount === '701' ? 'selected' : '')}
                                label="701"
                                name="players"
                                value="701"
                            />
                            <RadioButton
                                classList={'options__button ' + (this.state.scoreCount === '901' ? 'selected' : '')}
                                label="901"
                                name="players"
                                value="901"
                            />
                        </form>
                    </div>
                </div>
                <div className="options__action-container my-16">
                    <button className="button button--blue" onClick={this.startGameHandler}>Start Game</button>
                </div>
            </div>
        );
    }
}

export default Options;
