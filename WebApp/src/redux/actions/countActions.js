import * as types from "./actionTypes";

export function countUp() {
	return { type: types.ADD };
}
export function countDown() {
	return { type: types.SUBTRACT };
}
