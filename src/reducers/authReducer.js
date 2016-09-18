import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.authenticated, action) {
    switch (action.type) {
		case types.CHANGE_AUTH: {
            const nextState = state ? false : true;
			return nextState;
        }

		default: {
			return state;
        }
	}
}
