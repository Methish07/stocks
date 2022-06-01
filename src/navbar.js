import { AppBar } from '@mui/material'
import {  Link, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    const linkStyle = { color: 'white',  marginLeft: 60, }
    const AppbarStyle={display:'flex',justifyContent:'spaceBetween',backgroundColor:'purple'}
    const startlinkStyle={Color:'black',marginRight:460}  
    const logo_style={color:'white',fontSize:30}
    return (
        <div>
            <AppBar position='fixed' style={AppbarStyle} >
                <Toolbar>
                    <Typography variant='h5' style={startlinkStyle}><Link href='/' style={startlinkStyle}><HomeIcon style={logo_style} /></Link></Typography>
                    <Typography variant='h5'><Link style={linkStyle}>logo</Link></Typography>
                    <Typography variant='h5'><Link href='/login' style={linkStyle}><PersonIcon style={{color:'white',fontSize:30}} /></Link></Typography>
                    <Typography variant='h5' ><Link href='/' style={linkStyle}><LogoutIcon style={{color:'white',fontSize:30}} /></Link></Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar