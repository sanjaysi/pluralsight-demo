import * as types from './actionTypes';

export function authenticate(isLoggedIn) {
	return {
		type: types.CHANGE_AUTH,
		payload: isLoggedIn
	};
}