import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

const App = () => {
  return (
   <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />



   </Routes>
  )
}

export default App

