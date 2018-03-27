import { ADD_USER } from './../actions/actions';

export const user = (state = null, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        displayName: action.value,
        email: action.value,
        photoURL: action.value,
      }
    default:
      return state;
  }
}
