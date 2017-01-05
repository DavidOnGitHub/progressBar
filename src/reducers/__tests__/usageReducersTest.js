import reducer from '../usageReducers';
import * as Type from '../../actions/Type';

describe('usage reducers', () => {
    const initialState = {
        usageAmounts: [5, 20],
        selectedUsageIndex: 0
    };
    it('should increase specified usage amount', () => {
        const increaseUsageAction = {
            type: Type.INCREASE_USAGE,
            index: 1,
            amount: 10
        };
        const newState = reducer(initialState, increaseUsageAction);

        expect(newState.usageAmounts[0]).toEqual(5);
        expect(newState.usageAmounts[1]).toEqual(30);
    });

    it('should decrease specified usage amount', () => {
        const increaseUsageAction = {
            type: Type.INCREASE_USAGE,
            index: 1,
            amount: -10
        };
        const newState = reducer(initialState, increaseUsageAction);

        expect(newState.usageAmounts[0]).toEqual(5);
        expect(newState.usageAmounts[1]).toEqual(10);
    });

    it('should not decrease to negative number', () => {
        const increaseUsageAction = {
            type: Type.INCREASE_USAGE,
            index: 0,
            amount: -30
        };
        const newState = reducer(initialState, increaseUsageAction);

        expect(newState.usageAmounts[0]).toEqual(0);
        expect(newState.usageAmounts[1]).toEqual(20);
    });
});