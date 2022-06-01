import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Navbar from './navbar'
import { useState } from 'react'
const Home = () => {
  const [stocks,setstocks]=useState(["stock1","stock2","stock3","stock4"]);

  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <h1>Home</h1>
      {
        stocks.map((i)=>{
          return(
            <Grid container key={i}>
          <Grid item>
            <Typography variant='p'>{i}</Typography>
          </Grid>
          </Grid>
          )
        })
      }
    </div>
  )
}

export default Home