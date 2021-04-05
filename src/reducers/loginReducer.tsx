import {LOGIN, LOGOUT, LoginAction} from '../actions/actions';
import { initialState, loginState} from './initialstate';
import { createReducer } from 'typesafe-actions';

const LoginReducer = createReducer<loginState, LoginAction>(initialState, {
  [LOGIN]: (state, action) => {
    return Object.assign({}, state, {
      'isLogin': action.payload
    })
  },
  [LOGOUT]: (state, action) => {
    return Object.assign({}, state, {
      'isLogin': action.payload
    })
  }
})

export default LoginReducer;