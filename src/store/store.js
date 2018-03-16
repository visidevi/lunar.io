import { createStore } from 'redux';
import { user } from './../reducers/user';

/* Crear un estado inicial con initialState
   const initialState = {
    username: '',
    user: null,      
    city: null,
  } */

// Se pasan al store como parámetros:
// export const store = createStore(city, username, user, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ &&
// window.__REDUX_DEVTOOLS_EXTENSION__());