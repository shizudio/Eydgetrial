import React from 'react'; 
// import Grid from '../component/Grid';
import NavbarComponent from '../component/NavbarComponent'
import { Grid } from '@material-ui/core'
import './LandingPage.css'



function App() {
  return (
    <Grid container style={{padding: '8px 28px'}}>
        <Grid item xs={4} md={2}>
            Eydge
        </Grid>

      <Grid container item xs={4} md={8} justify={'center'}>
          <NavbarComponent label={'Home'}/>
          <NavbarComponent label={'contact us'}/>
          <NavbarComponent label='careers'/>
      </Grid>
        <Grid container item xs={4} md={2} justify='flex-end'>
            <button>
            Signup
            </button>
            <button>
            login
            </button>
        </Grid>
    </Grid>
  );
}

export default App;
