import React from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Button, Container, Grid, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: 350,
    maxWidth: 600,
    padding: 16
  }
});

const Login = () => {
  const classes = useStyles();
  const links = {color: "#0067B1"};
  return (
    <>
      <div id='home' className=' flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover '>
        <div style={{marginTop: 60}} className='flex flex-col z-[3]'>
          <Card className={classes.root}>
            <Container  component="main" maxWidth="xs">
              <Grid align="center" style={{paddingBottom: 20}}>
                <p style={{fontWeight:"bold", fontSize: 20}}>Sign In</p>
              </Grid>
              <TextField variant="outlined"
                         label='Enter phone no'
                         placeholder="Enter phone no"
                         fullWidth
                         name={'phone_no'}
                         required

              />
              <br/><br/>
              <TextField variant="outlined"
                         label='Enter Password'
                         placeholder="Enter Password"
                         name={"password"}
                         type='password'
                         fullWidth
                         required
              />
              <Button  variant="contained" color="primary" fullWidth style={{marginTop:20}}>
                <span style={{color: "#ffffff", fontWeight: "bold"}}>Sign In</span>
              </Button>


              <Typography style={{marginTop: "15px"}} className="flex justify-center typography">

                <p style={{fontSize: 14}}>Still not registered??  <Link style={links} to="/sign-up">Sign Up</Link> now</p>
              </Typography>
            </Container>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
