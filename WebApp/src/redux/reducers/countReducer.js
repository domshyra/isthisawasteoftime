import * as types from '../actions/actionTypes';

import initialState from './initialState';

export default function countReducer(state = initialState.count, action) {
    switch (action.type) {
        case types.ADD:
            return state + 1;
        case types.SUBTRACT:
                return state - 1;
        default:
            return state;
    }
}
