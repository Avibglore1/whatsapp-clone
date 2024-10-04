import React from 'react'

function Home(props) {
  const setisLoggedIn = props.setisLoggedIn;
  const handleLogout =() =>{
    setisLoggedIn(false);
  }
  return (
  <div>
    <h2>HomePage</h2>
    <button onClick={handleLogout}>LogOut</button>    
  </div>
   
  )
}

export default Home