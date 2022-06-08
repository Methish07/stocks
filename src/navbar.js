import { AppBar } from '@mui/material'
import {  Link, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    const linkStyle = { color: 'white',  marginLeft: 60,fontFamily:'cursive' }
    const AppbarStyle={display:'flex',justifyContent:'spaceBetween',backgroundColor:'purple',fontFamily:'fantasy'}
    const startlinkStyle={Color:'black',marginRight:460,fontFamily:"cursive"}  
    const logo_style={color:'white',fontSize:30,fontFamily:"cursive"}
    return (
        <div>
            <AppBar position='fixed' style={AppbarStyle} >
                <Toolbar>
                    <Typography variant='p' style={startlinkStyle}><Link href='/' style={startlinkStyle}><HomeIcon style={logo_style} /></Link></Typography>
                    <Typography variant='p'><Link style={linkStyle} href='/details'>Details</Link></Typography>
                    <Typography variant='p'><Link href='/login' style={linkStyle}>Login</Link></Typography>
                    <Typography variant='p' ><Link href='/' style={linkStyle}>logout</Link></Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar