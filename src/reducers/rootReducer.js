import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import authenticated from './authReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    authenticated
});

export default rootReducer;