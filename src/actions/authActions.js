import * as types from './actionTypes';

export function authenticate(authenticated) {
    return {
        type: types.CHANGE_AUTH, 
        authenticated: authenticated
    };
}