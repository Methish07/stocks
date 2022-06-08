import React from 'react'
import Login from './login'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import  Details  from './Details'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<Home />} exact ></Route>
        <Route path='login' element={<Login />} ></Route>
        <Route path='signup' element={<Signup />} ></Route>
        <Route path='details' element={<Details />}></Route>
      </Routes>
    </div>
  )
}

export default App