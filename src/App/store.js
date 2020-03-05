import { createStore, combineReducers, applyMiddleware } from "redux";
import { createPromise } from 'redux-promise-middleware';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import { albunes, albun } from './reducers/albums';
import { canciones, tendencias, cancion } from './reducers/songs';
import user from './reducers/user';
import historico from './reducers/historico';

export default createStore(
    combineReducers({albunes, albun, canciones, tendencias, cancion, user, historico}),
    composeWithDevTools(applyMiddleware(createPromise(), createLogger()))
);