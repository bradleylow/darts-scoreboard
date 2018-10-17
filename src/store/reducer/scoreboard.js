import * as actions from '../actions/actions';
import { updateObject } from '../utility';

const initialState = {
    players: [],
    scoreCount: null,
    isAuth: false
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GAME_AUTH: return setAuth(state, action);
        case actions.GAME_START: return startGame(state, action);
        default: return state;
    }
}

export default reducer;
