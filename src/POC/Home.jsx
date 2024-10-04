import React from 'react'
import {useNavigate} from 'react-router-dom'


function Home(props) {
  const setisLoggedIn = props.setisLoggedIn;
  const navigate = useNavigate();
  const handleLogout =async () =>{
   
    setisLoggedIn(false);
    navigate('/login');
  }
  return (
  <div>
    <h2>HomePage</h2>
    <button onClick={handleLogout}>LogOut</button>    
  </div>
   
  )
}


export default Home