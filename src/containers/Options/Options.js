import React, { Component } from 'react';

import RadioButton from './../../components/UI/Form/RadioButton/RadioButton';

class Options extends Component {

    state = {
        players: [],
        scoreCount: 0
    }

    render () {
        return (
            <div className="options-container text-center">
                <h1>Darts 01 Game</h1>
                <div className="options__players mb-12">
                    <h5 className="mb-4">Select Number of Players:</h5>
                    <div className="options__select">
                        <RadioButton
                            classList="options__button selected"
                            label="1"
                            name="players"
                            value="1"
                        />
                        <RadioButton
                            classList="options__button"
                            label="2"
                            name="players"
                            value="2"
                        />
                        <RadioButton
                            classList="options__button"
                            label="3"
                            name="players"
                            value="3"
                        />
                        <RadioButton
                            classList="options__button"
                            label="4"
                            name="players"
                            value="4"
                        />
                    </div>
                </div>
                <div className="options__scoring">
                    <h5 className="mb-4">Select Game Scoring:</h5>
                    <div className="options__select">
                        <RadioButton
                            classList="options__button selected"
                            label="301"
                            name="players"
                            value="301"
                        />
                        <RadioButton
                            classList="options__button"
                            label="501"
                            name="players"
                            value="501"
                        />
                        <RadioButton
                            classList="options__button"
                            label="701"
                            name="players"
                            value="701"
                        />
                        <RadioButton
                            classList="options__button"
                            label="901"
                            name="players"
                            value="901"
                        />
                    </div>
                </div>
                <div className="options__action-container my-12">
                    <button className="button button--green">Start Game</button>
                </div>
            </div>
        );
    }
}


export default Options;
