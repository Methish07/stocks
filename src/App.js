import React from 'react'
import Login from './login'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'
import  Home from './Home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<Home />} exact ></Route>
        <Route path='login' element={<Login />} ></Route>
        <Route path='signup' element={<Signup />} ></Route>
      </Routes>
    </div>
  )
}

export default App