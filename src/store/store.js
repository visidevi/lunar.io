import { createStore } from 'redux';
import { user } from './../reducers/user';

// Se pasan al store como parámetros los reducers y el initialState:
export const store = createStore(user, window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());

//export const store = createStore(() => { }, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//window.__REDUX_DEVTOOLS_EXTENSION__());