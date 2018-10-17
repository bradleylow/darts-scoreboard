import * as actions from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
    players: [],
    scoreCount: null,
    isAuth: false
}

const startGame = (state, action) => {
    return updateObject(state, {
        players: action.players,
        scoreCount: action.scoreCount
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GAME_START: return startGame(state, action);
        default: return state;
    }
}

export default reducer;
