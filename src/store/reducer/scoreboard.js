import * as actions from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
    players: [],
    scoreCount: null,
    roundCount: 1,
    isAuth: false,
    winner: null
}

const setAuth = (state, action) => {
    return updateObject(state, {
        isAuth: action.isAuth
    })
}

const startGame = (state, action) => {
    return updateObject(state, {
        players: action.players,
        scoreCount: action.scoreCount
    });
}

const resetGame = (state, action) => {
    return updateObject( state, initialState );
}

const endGame = (state, action) => {
    return updateObject(state, {
        players: action.players,
        winner: action.winner,
        roundCount: action.roundCount
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GAME_AUTH: return setAuth(state, action);
        case actions.GAME_START: return startGame(state, action);
        case actions.GAME_RESET: return resetGame(state, action);
        case actions.GAME_END: return endGame(state, action);
        default: return state;
    }
}

export default reducer;
