import React from 'react'
import Navbar from './navbar'
import Demo from './bar'
import Stocks from './stocks'
import './index.css'
const Home = () => {

  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <div className='seperator'>
      <Stocks/>
      <Demo />
      </div>
      
    </div>
  )
}

export default Home
