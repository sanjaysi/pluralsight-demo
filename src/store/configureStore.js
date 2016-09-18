import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(initialState) {
    const logger = createLogger();

    const devToolsEnhancers = compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    const storeEnhancer = compose(
        applyMiddleware(thunk, reduxImmutableStateInvariant(), logger),
        devToolsEnhancers
    );

    return createStore(
        rootReducer,
        initialState,
        storeEnhancer
    );
}