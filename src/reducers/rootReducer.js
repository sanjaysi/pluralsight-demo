import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import authenticated from './authReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    authenticated,
    ajaxCallsInProgress
});

export default rootReducer;