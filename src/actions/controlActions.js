import * as Type from './Type';

export function setControls(controlValues) {
	return {
		type: Type.SET_CONTROLS,
		controlValues
	};
}
export function setLimit(limit) {
	return {
		type: Type.SET_LIMIT,
		limit
	};
}