import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';
import {LoginHandler, LogoutHandler} from '../actions/actions';

const LoginSection: React.FC = () => {
  //로그인 하지 않았을때는 로그인 버튼
  //로그인 했을 때는 마이페이지 버튼
  const loginState = useSelector((state: RootState) => state.LoginReducer)
  const {isLogin} = loginState
  const dispatch = useDispatch();
  
  const clickLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(isLogin) {
      dispatch(LogoutHandler(false));
    } else {
      dispatch(LoginHandler(true));
    }
  }

  return (
    <div className='loginsection'>
      <button onClick={clickLogin}>
        {
          isLogin?
            '마이페이지':
            '로그인'
        }
      </button>
    </div>
  )
}

export default LoginSection
