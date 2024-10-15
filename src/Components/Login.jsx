import React from 'react'
import { Fingerprint,LogIn } from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import {GoogleAuthProvider} from 'firebase/auth'; 

function Login(props) {
    const setisLoggedIn = props.setisLoggedIn;
    const navigate = useNavigate()
    
    

    const handleLogin = async() =>{
      const result = await signInWithPopup(auth, new GoogleAuthProvider);
      console.log(result)
      setisLoggedIn(true);
      navigate('/');
    }

  return (
    <>
    <div className='h-[220px] bg-[#04a784]' >
        <div className='flex ml-[220px] pt-10  gap-4 '>
          <img src="https://whatsapp-clone-826a9.web.app/whatsapp.svg" alt="" className='h-8'/>
          <div className='text-white uppercase'>Whatsapp</div>
        </div>
    </div>
   
    <div className='h-[calc(100vh-220px)] bg-background flex justify-center items-center relative'>
        <div className='h-[80%] w-[50%] bg-white shadow-2xl flex flex-col gap-4 justify-center items-center absolute -top-[93px]'>
          <Fingerprint className='strokeWidth={1} h-16 w-16 text-[#04a784]'/>
          <div>Sign In</div>
          <div>Sign in with your google account to get started.</div>
          <button className='flex gap-[6px] items-center p-4 bg-[#04a784] text-white rounded-lg' >
            <div>Sign in with Google</div>
            <LogIn onClick={handleLogin}/>
          </button>
        </div>
    </div>
    </>
    
  )
}

export default Login