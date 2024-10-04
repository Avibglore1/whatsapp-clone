import React, { useState } from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Chat from '../Components/Chat';
import ProtectedRoute from './ProtectedRoute';
function Routing_App() {
  const [isLoggedIn,setisLoggedIn] = useState(true);
  return (
    <>
      <h1>Routing_App</h1>
      <Routes>
        <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn} ><Home setisLoggedIn={setisLoggedIn}></Home></ProtectedRoute>}></Route>
        <Route path="/Chat/:uniqueId" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Chat setisLoggedIn={setisLoggedIn}></Chat></ProtectedRoute>}></Route>
        <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn}></Login>}></Route>
      </Routes>
    </>
    
  )
}



export default Routing_App