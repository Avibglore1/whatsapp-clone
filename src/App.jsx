import Login from "./Components/Login"
import { Route, Routes } from "react-router-dom"
import Chat from "./Components/Chat"
import Home from "./Components/Home"
import PageNotFound from "./Components/PageNotFound"

function App() {


  return (
    <>
     <h1>Whatsapp clone</h1>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/Chat/:uniqueId" element={<Chat></Chat>}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
     </Routes>
   </>
  )
}

export default App
