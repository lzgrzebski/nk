import { createEpicMiddleware } from 'redux-observable';
import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
import epics from './epics';
import { History } from 'history';

interface Window {
    environment: string;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
}
declare let window: Window;

export default (initialStore = {}, history: History) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const epicMiddleware = createEpicMiddleware(epics);

    const store = createStore(reducers, composeEnhancers(
        applyMiddleware(
            epicMiddleware,
            routerMiddleware(history)
        ),
    ));
    
    return store;
};
