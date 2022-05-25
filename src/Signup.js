import { Grid, Paper,TextField, Button, Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Signup = () => {

    const [firstname,setfirstname]=useState('');
    const [lastname,setlastname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');

    
    const paperstyle={padding:20,height:'70vh',width:300,margin:'20px auto'}
    const textfieldStyle={padding:10,margin:'2px 2px'}
    const btnstyle={padding:10,margin:'2px 2px'}

const submitHandler=(e)=>{
    e.preventDefault();
    console.log(firstname,lastname,email,password);
    setemail('');
    setfirstname('');
    setlastname('');
    setpassword('');
}

  return (
    <div>
        <Grid alignContent='center'>
            <Paper style={paperstyle}>
                <Avatar></Avatar>
                <form onSubmit={submitHandler}>
            <TextField
                  id="firstname"
                  label="firstname"
                 placeholder='enter firstname'
                 fullWidth
                 style={textfieldStyle}
                 onChange={(e)=>{setfirstname(e.target.value)}}
                 value={firstname}
                 required
                />
                <TextField
                  id="lasttname"
                  label="lasttname"
                 placeholder='enter lasttname'
                 fullWidth
                 style={textfieldStyle}
                 value={lastname}
                 onChange={(e)=>{setlastname(e.target.value)}}
                 required
                />
                <TextField
                  id="email"
                  label="email"
                 placeholder='enter email'
                 fullWidth
                 style={textfieldStyle}
                 type="email"
                 value={email}
                 onChange={(e)=>{setemail(e.target.value)}}
                required></TextField>
                <TextField
                  id="pasword"
                  label="password"
                  placeholder='enter password'
                  type='password'
                  fullWidth
                  style={textfieldStyle}
                  value={password}
                  onChange={(e)=>{setpassword(e.target.value)}}
                  required
                />
                <Button type='submit' variant="contained" fullWidth color='secondary' style={btnstyle} >
                  sign up
                </Button>
                </form>
                <span><p>already having an account</p><Link to='/'>login</Link></span>
            </Paper>
        </Grid>
    </div>
  )
}

export default Signup