import * as Type from '../actions/Type';
import initialState from '../initialState';

export default (state = initialState.control, action) => {
    switch (action.type) {
        case Type.SET_CONTROLS:
            return Object.assign({}, state, {
                controlValues: action.controlValues
            });
        case Type.SET_LIMIT:
            return Object.assign({}, state, {
                limit: action.limit
            });
        default:
            return state;
    }
}