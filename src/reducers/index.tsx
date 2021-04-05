import { combineReducers } from 'redux';
import LoginReducer from './loginReducer';

const rootReducer = combineReducers({
  LoginReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;