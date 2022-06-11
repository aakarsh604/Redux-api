import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginReq } from '../Store/auth/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
      dispatch(loginReq());
      navigate("/")
  }

  return (
    <form style={{marginTop : "25px"}}>
      <input type="email" value="eve.holt@reqes.com" placeholder='Enter email here..' required/>
      <input type="password" value="cityslicka" placeholder='Enter password here..' required/>
      <button onClick={handleClick}>submit</button>
    </form>
  )
}

export default Login