import React from 'react'
import {useNavigate} from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import {GoogleAuthProvider} from 'firebase/auth'; 


function Login(props) {
  const navigate = useNavigate()
  const setisLoggedIn = props.setisLoggedIn;
  const handleLogin = async() =>{
    const result = await signInWithPopup(auth, new GoogleAuthProvider);
    console.log(result)
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