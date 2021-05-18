import React from 'react';
import {Grid, Button} from '@material-ui/core';

const NavBarItem = (prop) => {
    return <div style={{padding: '0 8px'}}>{prop.children}</div>
}

const Navbar = () => {
    return <Grid  className=" navBarStyle" style={{padding: '8px 28px', borderBottom: '1px solid rgba(100,100,100,0.1)'}} container>
        <Grid xs={2} item>
            Eydge
        </Grid>
        <Grid xs={8} justify={'center'} container item>
            <NavBarItem>Home</NavBarItem>
            <NavBarItem>Contact Us</NavBarItem>
            <NavBarItem>Careers</NavBarItem>
        </Grid>
        <Grid xs={2} justify={'flex-end'} container item>
            <NavBarItem>
                <Button small>Sign up</Button>
            </NavBarItem>
            <NavBarItem>
                <Button small>Log in</Button>
            </NavBarItem>
        </Grid>
    </Grid>
}


export default Navbar
