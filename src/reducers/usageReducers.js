import * as Type from '../actions/Type';
import initialState from '../initialState';

export default (state = initialState.usage, action) => {
    switch (action.type) {
        case Type.INCREASE_USAGE:
            const {index, amount} = action;
            
            const currentAmount = state.usageAmounts[index];
            const newAmount = currentAmount + amount;

            let usageAmounts = [...state.usageAmounts];

            usageAmounts.splice(index, 1, newAmount > 0 ? newAmount : 0);

            return Object.assign({}, state, {
                usageAmounts
            });
        case Type.SET_USAGES:
            return Object.assign({}, state, {
                usageAmounts: action.usageAmounts
            });
        case Type.SELECT_USAGE:
            return Object.assign({}, state, {
                selectedUsageIndex: action.index
            });
        default:
            return state;
    }
}