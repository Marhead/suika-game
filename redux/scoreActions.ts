export const SET_SCORE = 'SET_SCORE';

export const setScore = (score: number) => ({
    type: SET_SCORE,
    payload: score,
});