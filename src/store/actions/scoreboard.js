import * as actions from './actions';

export const setAuth = (auth) => {
    return {
        type: actions.GAME_AUTH,
        isAuth: auth
    }
}

export const startGame = (options) => {
    const playerBank = [
        {
            name: 'Player 1',
            color: 'blue'
        },
        {
            name: 'Player 2',
            color: 'orange'
        },
        {
            name: 'Player 3',
            color: 'green'
        },
        {
            name: 'Player 4',
            color: 'red'
        }
    ];

    let players = [];

    for (let i = 0; i < options.players; i++) {
        let player = playerBank[i];

        const newPlayer = {
            ...player,
            id: i,
            score: options.scoreCount,
            points: 0,
            darts: 0,
            ppd: 0
        }

        players.push(newPlayer);
    }

    return {
        type: actions.GAME_START,
        players: players,
        scoreCount: options.scoreCount
    }
}

export const resetGame = (players, winningPlayer) => {
    return {
        type: actions.GAME_RESET,
    }
}

export const endGame = (players, winningPlayer, roundCount) => {
    return {
        type: actions.GAME_END,
        players: players,
        winner: winningPlayer,
        roundCount: roundCount
    }
}
