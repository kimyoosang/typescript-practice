
import {createStore, combineReducers } from "redux";
import LoginReducer from '../reducers/reducer';

const rootReducer = combineReducers({
  LoginReducer
})

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;

