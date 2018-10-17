import * as actions from '../actions/actions';
import updateObject from '../utility';

const initialState = {
    players: [],
    score: null,
    isAuth: false
}

const startGame = (state, action) => {

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GAME_START: return startGame(state, action);
        default: return state;
    }
}

export default reducer;
