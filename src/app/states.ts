export const RESET_STATE = 'RESET_STATE';
const INIT = '__NOT_A_REAL_STATE_';

export const reset = reducer => {
    const initialState = reducer(undefined, {type: 'INIT'});
    return (state, action) => {
        if (action.type === RESET_STATE) {
            return initialState;
        }
        return reducer(state, action);
    };
};

