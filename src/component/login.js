import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
import '../App.css';
//import { width } from '@material-ui/system';
//import GoogleLogin from 'react-google-login';
//import FacebookLogin from 'react-facebook-login';





class Login extends Component {



  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (



      <div>


        <div align="center">
          <img align="center" src={require(`../images/contact.jpg`)} width="30%" ></img>
        </div>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel className="label"
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <br></br>


        <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.indigo-pink.min.css" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />



        <div className="button1">

          <a href="https://www.facebook.com" title="Share on Facebook" target="_blank" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--facebook"><i class="fa fa-facebook fa-fw"></i> Facebook</a>
         
        <div className="button2">

          <a href="https://www.google.com" title="Share on google" target="_blank" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--facebook"><i class="fa fa-google fa-fw"></i> google</a>
          </div>
          </div>

        
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
                </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>



      </div>
    )
  }
}
export default Login