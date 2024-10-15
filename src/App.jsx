import Login from "./Components/Login"
import { Route, Routes } from "react-router-dom"
import Chat from "./Components/Chat"
import Home from "./Components/Home"
import PageNotFound from "./Components/PageNotFound"
import React, { useState } from 'react'
import ProtectedRoute from './Components/ProtectedRoute';

function App() {

  const [isLoggedIn,setisLoggedIn] = useState(true);
  return (
    <>
     <Routes>
     <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn} ><Home setisLoggedIn={setisLoggedIn}></Home></ProtectedRoute>}></Route>
        <Route path="/Chat/:uniqueId" element={<ProtectedRoute isLoggedIn={isLoggedIn}><Chat setisLoggedIn={setisLoggedIn}></Chat></ProtectedRoute>}></Route>
        <Route path="/login" element={<Login setisLoggedIn={setisLoggedIn} ></Login>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
     </Routes>
   </>
  )
}

export default App
