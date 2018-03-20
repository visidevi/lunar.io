import { createStore } from 'redux';
import { user } from './../reducers/user';

//$Recycle.Bin Crear un estado inicial con initialState
const initialState = {
  user: null,      
  location: null,
  events: []
}

// Se pasan al store como parámetros:
export const store = createStore(user, window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());

 //export const store = createStore(() => { }, window.__REDUX_DEVTOOLS_EXTENSION__ &&
 //window.__REDUX_DEVTOOLS_EXTENSION__());