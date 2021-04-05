import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';

// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../modules';
// import { increase, decrease, increaseBy } from '../modules/counter'


const LoginSection: React.FC = () => {
  //로그인 하지 않았을때는 로그인 버튼
  //로그인 했을 때는 마이페이지 버튼
  const isLogin = useSelector((state: RootState) => state.LoginReducer)
  const {login} = isLogin
  const dispatch = useDispatch();
  
  return (
    <div className='loginsection'>
      
        <button>로그인</button>
      
    </div>
  )
}

export default LoginSection
