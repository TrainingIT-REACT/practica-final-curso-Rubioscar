import { createStore, combineReducers, applyMiddleware } from "redux";
import { createPromise } from 'redux-promise-middleware';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import { albunes, albun } from './reducers/albums';
import { canciones, tendencias, cancion } from './reducers/songs';
import user from './reducers/user';

export default createStore(
    combineReducers({albunes, albun, canciones, tendencias, cancion, user}),
    composeWithDevTools(applyMiddleware(createPromise(), createLogger()))
);