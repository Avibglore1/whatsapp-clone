import React from 'react'
import {useNavigate} from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../../../firebase.config';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

function Login(props) {
  const navigate = useNavigate()
  const setisLoggedIn = props.setisLoggedIn;
  const handleLogin = async() =>{
    const result = await signInWithPopup(auth, new GoogleAuthProvider);
    setisLoggedIn(true);
    navigate('/');
  }
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>LogIn</button>
    </div>
    
  )
}

export default Login