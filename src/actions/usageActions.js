import * as Type from './Type';

export function increaseUsage(index, amount) {
    return {
        type: Type.INCREASE_USAGE,
        index,
        amount
    }
}

export function setUsages(usageAmounts) {
    return {
        type: Type.SET_USAGES,
        usageAmounts
    };
}

export function selectUsage(index) {
    return {
        type: Type.SELECT_USAGE,
        index
    };
}


