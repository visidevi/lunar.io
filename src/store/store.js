import { createStore } from 'redux';
// importar reducers aquí

/* Crear un estado inicial con initialState
*   const initialState = {
*     city: null,
*   }
*/

/* Se pasa al store como parámetros:
*   export const store = createStore(city, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ &&
*   window.__REDUX_DEVTOOLS_EXTENSION__());
*/

export const store = createStore(() => { }, window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());