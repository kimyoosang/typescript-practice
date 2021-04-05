import {LOGIN, LOGOUT, Loginchange} from '../actions/actions';
import { initialState, loginState} from '../reducers/initialstate';

const LoginReducer = (state: loginState = initialState, action: Loginchange) => {

  switch(action.type) {
    case LOGIN:
    return {login: action.payload};
    case LOGOUT:
      return {login: action.payload}

      default: return state;
  }
}

export default LoginReducer;