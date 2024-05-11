import { SET_COLOR, ADD_TO_HISTORY } from './action';

const initialState = {
    color: '#000000',  // Initial color (black)
    colorHistory: []
};

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COLOR:
            return { ...state, color: action.payload };
        case ADD_TO_HISTORY:
            return { ...state, colorHistory: [...state.colorHistory, action.payload] };
        default:
            return state;
    }
};


export default colorReducer;
