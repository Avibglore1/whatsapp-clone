import React from 'react'
import {useNavigate} from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth, storage } from '../../firebase';
import { uploadBytesResumable,ref } from 'firebase/storage';
import ChatPanel from './ChatPanel';

function Home(props) {
  const handleChange = (e) =>{
    const img= e.target.files[0];
    const storageRef = ref(storage, '/profile');
    const uploadTask =  uploadBytesResumable(storageRef, img);
    uploadTask.on('state_changed', progressCB, errorCB, finishedCB);
      function progressCB(data){
        console.log('data', data)
      }
      function errorCB(err){
        console.log(err);
      }  
      function finishedCB(){
        console.log('Succesfully uploaded');
      }
    }
  
  const setisLoggedIn = props.setisLoggedIn;
  const navigate = useNavigate();
  const handleLogout =async () =>{
    await signOut(auth);
    setisLoggedIn(false);
    navigate('/login');
  }
  return (
  <div>
    {/* <h2>HomePage</h2>
    <button onClick={handleLogout}>LogOut</button>
    <input type='file' accept='image/png image/jpeg image/webp' onChange={handleChange}/>     */}
    <ChatPanel></ChatPanel>
  </div>
   
  )
}


export default Home