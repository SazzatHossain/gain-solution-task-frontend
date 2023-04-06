import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Button, Container, Grid, TextField} from "@material-ui/core";
import {toast} from "react-toastify";
import {useFetchRegistrationToken} from "../../../Hooks/useFetchRegistrationToken";


const useStyles = makeStyles({
  root: {
    minHeight: 350,
    maxWidth: 600,
    padding: 16
  }
});

const Registration = () => {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [, fetchRegistration] = useFetchRegistrationToken();
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if(user.first_name !== "" && user.last_name !== "" && user.phone_no !== "" && user.password !== "" && confirmPassword !== ""){
      if(user.password === confirmPassword){
        fetchRegistration(user.first_name, user.last_name, user.phone_no, user.password );
      }else{
        toast.error("Password do not match", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 3000
        });
      }
    }else{
      toast.error("All fields must be filled", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000
      });
    }
  };
console.log(user);
  const handleChange = (event) => {
    setUser((prevValue) => ({...prevValue, [event.target.name]: event.target.value}));
  };
  return (
    <>
      <div id='home' className=' flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover '>
        <div style={{marginTop: 60}} className='flex flex-col mt-[200px] z-[3]'>
          <Card className={classes.root}>
            <Container  component="main" maxWidth="xs">
              <Grid align="center" style={{paddingBottom: 20}}>
                <p style={{fontWeight:"bold", fontSize: 20}}>Sign Up</p>
              </Grid>
              <TextField variant="outlined"
                         label='First Name'
                         placeholder="First Name"
                         fullWidth
                         name={'first_name'}
                         required
                         onChange={handleChange}

              />
              <br/><br/>
              <TextField variant="outlined"
                         label='Last name'
                         placeholder="Last Name"
                         fullWidth
                         name={'last_name'}
                         required
                         onChange={handleChange}

              />
              <br/><br/>
              <TextField variant="outlined"
                         label='Email'
                         placeholder="Email"
                         type= "email"
                         fullWidth
                         name={'Email'}
                         required
                         onChange={handleChange}

              />
              <br/><br/>
              <TextField variant="outlined"
                         label='Enter phone no'
                         placeholder="Enter phone no"
                         fullWidth
                         name={'phone_no'}
                         required
                         onChange={handleChange}

              />
              <br/><br/>
              <TextField variant="outlined"
                         label='Enter Password'
                         placeholder="Enter Password"
                         name={"password"}
                         type='password'
                         fullWidth
                         required
                         onChange={handleChange}

              />
              <br/><br/>
              <TextField
                onChange={e => setConfirmPassword(e.target.value)}
                name={"confirm_password"}
                type="password"
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Re-enter Password"
                placeholder="Re-enter Password"
                onChange={handleChange}
              />
              <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth style={{marginTop:20}}>
                <span style={{color: "#ffffff", fontWeight: "bold"}}>Sign Up</span>
              </Button>
            </Container>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Registration;
