export const LOGIN = 'LOGIN' as const; //1. 액션타입 정의
export const LOGOUT = 'LOGOUT' as const

export const LoginHandler = () => {
  return {
    type: LOGIN,
    payload: true
  }
}

export const LogoutHandler = () => {
  return {
    type: LOGOUT,
    payload: false
  }
}

export type Loginchange = 
    | ReturnType<typeof LoginHandler>
    | ReturnType<typeof LogoutHandler>