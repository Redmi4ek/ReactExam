export const SET_COLOR = 'SET_COLOR';
export const ADD_TO_HISTORY = "ADD_TO_HISTORY";


export const setColor = (color) => ({
    type: SET_COLOR,
    payload: color,
});

export const addToHistory = (color) => ({
    type: ADD_TO_HISTORY,
    payload: color
});