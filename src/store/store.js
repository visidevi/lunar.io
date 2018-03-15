import { createStore } from 'redux';
// importar reducers aquí

// Crear un estado inicial con initialState:
/* const initialState = {
  username: '',
  user: null,      
  //city: null,
  events: []
} */

// Se pasan al store como parámetros los reducers y el initialState:
//export const store = createStore(initialState, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(() => { }, window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());