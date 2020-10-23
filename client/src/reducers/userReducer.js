import { LOGIN_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload
      };
    default:
      return state;
  }
};
