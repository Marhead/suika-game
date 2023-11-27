import { SET_SCORE } from './scoreActions';

const initialState = {
    score: 0,
};

const scoreReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_SCORE:
            return {
                ...state,
                score: action.payload,
            };
        default:
            return state;
    }
};

export default scoreReducer;