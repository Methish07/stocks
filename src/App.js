import React from 'react'
import Login from './login'
import Signup from './Signup'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>} exact ></Route>
      <Route path='signup' element={<Signup/>} ></Route>
      </Routes>
    </div>
  )
}

export default App