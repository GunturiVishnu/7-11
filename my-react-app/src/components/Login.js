import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Avatar, Button, Paper, TextField, Typography, Link, FormControlLabel, Checkbox} from '@mui/material/';
import Grid from '@mui/material/Grid';

const Login = () => {

      const paperStyle = {
        padding: "20px",
        height: "70vh",
        width: "280",
        margin: "20 auto"
      }

      const avatarStyle={
          backgroundColor: "green"
      }

      const textfield ={
        margin: '10px'
      }

      const btnstyle = {
        margin: '8px 0'
      }
      
    return(

      
      <Grid>
          <Paper elevation = {10} style={paperStyle}>
            <Grid>
                <Avatar style = {avatarStyle}>  </Avatar>
                <h4>Sign In</h4>
            </Grid>

            <TextField
              label = 'Username'
              style={textfield}
              placeholder='Enter Username'
              fullWidth
              required>
            </TextField>

            <TextField
              label = 'Password'
              style={textfield}
              placeholder='Enter Password'
              type = 'password'
              fullWidth
              required>
            </TextField>

            <FormControlLabel
                control = {
                  <Checkbox
                    name='checked'
                    color='primary'    
                  />}
                    label = 'Remember Me'
                  />
                  <Button
                    type = "submit"
                    color= "primary"
                    variant = "contained"
                    style= {btnstyle}
                    fullWidth
                    >
                    Sign In
                  </Button>

                  <Typography
                      style = {textfield}

                  >

                    <Link href = "#">
                        Forgot Password?
                    </Link>

                  </Typography>

                  <Typography
                      style = {textfield}
                  >

                            <Link href = "#">
                                Dont have an account? Sign up!
                            </Link>

                  </Typography>

            </Paper>
          </Grid>


    )

}
export default Login;