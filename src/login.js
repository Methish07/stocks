import React from 'react'
import { Avatar, Grid, Paper, TextField, Button } from '@material-ui/core'
import './index.css'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Navbar from './navbar'
const Login = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

 
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    setusername('');
    setpassword('');
    alert(username+"sucessfully logged in");
    window.
  }

  const paperstyle = { padding: 20, height: '70vh', width: 300, margin: '90px auto' }
  const textfieldStyle = { padding: 10, margin: '2px 2px' }
  const btnstyle = { padding: 10, margin: '2px 2px' }
  return (
    <div>
      <Navbar />
      <Grid >
        <Paper style={paperstyle} elevation={10}>
          <Grid align='center'>
            <Avatar ><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg></Avatar>
            <h2>sign in</h2>
          </Grid>
          <form onSubmit={submitHandler}>
            <TextField
              id="username"
              label="username"
              placeholder='enter username'
              fullWidth
              style={textfieldStyle}
              onChange={(e) => { setusername(e.target.value) }}
              value={username}
              required
            />
            <TextField
              id="password"
              label="password"
              placeholder='enter password'
              type='password'
              fullWidth
              style={textfieldStyle}
              onChange={(e) => { setpassword(e.target.value) }}
              value={password}
              required
            />
            <Button type='submit' variant="contained" color="primary" fullWidth style={btnstyle}>
              log in
            </Button>
          </form>
          <span><p>do you have an account</p><Link to='/signup'>sign up</Link></span>
        </Paper>
      </Grid>
    </div>
  )
}

export default Login