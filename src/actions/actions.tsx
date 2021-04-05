import { createAction, ActionType  } from 'typesafe-actions';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const LoginHandler = createAction(LOGIN)<boolean>();
export const LogoutHandler = createAction(LOGOUT)<boolean>();

const actions = {LoginHandler, LogoutHandler};

export type LoginAction = ActionType<typeof actions>