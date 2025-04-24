import React from 'react'
import {BrowserRouter as Router,Routes,Route} from"react-router-dom"
import Landing from './pages/landing'
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from"./components/ProtectedRoute"

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/register' element={<Register/>} />
      <Route path='/login'  element={<Login/>} />
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
    </Routes>
   </Router>
  )
}

export default App
