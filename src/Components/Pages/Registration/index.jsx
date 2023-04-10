import React, {useEffect, useState} from "react";
import { makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import {Button, Container, Grid, TextField} from "@mui/material";
import {useFetchRegistrationToken} from "../../../Hooks/useFetchRegistrationToken";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {validates,validateRequired,validateMaxLength,validateMinLength} from "../../FormValidator/Validator";
import {
  EMAIL_MAX_LEN,
  FIRST_NAME_MAX_LEN,
  FIRST_NAME_MIN_LEN,
  LAST_NAME_MAX_LEN,
  LAST_NAME_MIN_LEN, PASSWORD_MAX_LEN, PASSWORD_MIN_LEN, PHONE_NO_MAX_LEN, PHONE_NO_MIN_LEN
} from "../../../Constants/general";

const useStyles = makeStyles({
  root: {
    minHeight: 350,
    maxWidth: 600,
    minWidth: 400,
    padding: 16
  }
});

const Registration = () => {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [, fetchRegistration] = useFetchRegistrationToken();
  const [errors, setErrors] = useState();

  const handleChange = (event) => {
    setUser((prevValue) => ({...prevValue, [event.target.name]: event.target.value}));
  }
  const handleSubmit = () => {
        fetchRegistration(user.first_name, user.last_name, user.phone_no, user.password );
  };

  ///////////// form validation
  let buttonClickable = false;
  if (!user.first_name?.length > 0 || !user.last_name?.length > 0 || !user.phone_no?.length > 0 || !user.email?.length > 0 || !user.password?.length > 0 ||  errors.first_name?.length > 0 || errors.last_name?.length > 0 || errors.phone_no?.length > 0 || errors.email?.length > 0 || errors.password?.length > 0) {
    buttonClickable = true;
  }

  useEffect(() => {
    setErrors(
      validates(
        validateRequired('first_name'),
        validateRequired('last_name'),
        validateRequired('phone_no'),
        validateRequired('email'),
        validateRequired('password'),
        validateMaxLength('phone_no', PHONE_NO_MAX_LEN),
        validateMinLength('phone_no', PHONE_NO_MIN_LEN),
        validateMaxLength('email', EMAIL_MAX_LEN),
        validateMaxLength('password', PASSWORD_MAX_LEN),
        validateMinLength('password', PASSWORD_MIN_LEN),
        validateMaxLength('first_name', FIRST_NAME_MAX_LEN),
        validateMinLength('first_name', FIRST_NAME_MIN_LEN),
        validateMaxLength('last_name', LAST_NAME_MAX_LEN),
        validateMinLength('last_name', LAST_NAME_MIN_LEN),
      )(user, {}),
    );
  }, [user]);

  return (
    <>
      <div id='home' className=' flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover '>
        <div  className='flex flex-col mt-[60px] z-[3]'>
          <Card className={classes.root}>
            <Container  component="main" maxWidth="xs">
              <Grid align="center" >
                <p className={"font-bold text-2xl pb-3"}>Sign Up</p>
              </Grid>
              <ToastContainer/>
              <TextField variant="outlined"
                         label='First Name'
                         placeholder="First Name"
                         fullWidth
                         name={'first_name'}
                         required
                         onChange={handleChange}
                         error={Boolean(errors?.first_name)}
                         helperText={(errors?.first_name)}
              />
              <br/><br/>
              <TextField variant="outlined"
                         label='Last name'
                         placeholder="Last Name"
                         fullWidth
                         name={'last_name'}
                         required
                         onChange={handleChange}
                         error={Boolean(errors?.last_name)}
                         helperText={(errors?.last_name)}
              />
              <br/><br/>
              <TextField variant="outlined"
                         label='Email'
                         placeholder="Email"
                         type= "email"
                         fullWidth
                         name={'email'}
                         required
                         onChange={handleChange}
                         error={Boolean(errors?.email)}
                         helperText={(errors?.email)}
              />
              <br/><br/>
              <TextField variant="outlined"
                         label='Enter phone no'
                         placeholder="Enter phone no"
                         fullWidth
                         name={'phone_no'}
                         required
                         onChange={handleChange}
                         error={Boolean(errors?.phone_no)}
                         helperText={(errors?.phone_no)}
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
                         error={Boolean(errors?.password)}
                         helperText={(errors?.password)}
              />
              <br/><br/>
              <Button onClick={handleSubmit} variant="contained" color="primary" disabled={buttonClickable} fullWidth style={{marginTop:20}}>
                <span style={{color: "#ffffff", fontWeight: "bold"}}>Sign Up</span>
              </Button>
            </Container>
          </Card>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Registration;
