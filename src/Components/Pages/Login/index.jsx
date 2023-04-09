import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Button, Container, Grid, TextField, Typography} from "@material-ui/core";
import {useFetchLoginToken} from "../../../Hooks/useFetchLoginToken";
import {toast, ToastContainer} from "react-toastify";
import {validateMaxLength, validateMinLength, validateRequired, validates} from "../../FormValidator/Validator";
import {
  PASSWORD_MAX_LEN,
  PASSWORD_MIN_LEN,
  PHONE_NO_MAX_LEN,
  PHONE_NO_MIN_LEN
} from "../../../Constants/general";

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
  const [user, setUser] = useState({});
  const [, fetchLogin] = useFetchLoginToken();
  const [errors, setErrors] = useState();

  const handleChange = (event) => {
    setUser((prevValue) => ({...prevValue, [event.target.name]: event.target.value}));
  };
  const handleSubmit = async () => {
    if (user.phone_no !== "" && user.password !== "") {
      fetchLogin(user.phone_no, user.password);
    } else {
      toast.success("All fields must be filled", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  ///////////// form validation
  let buttonClickable = false;
  if ( !user.phone_no?.length > 0 || !user.password?.length > 0 || errors.phone_no?.length > 0  || errors.password?.length > 0) {
    buttonClickable = true;
  }

  useEffect(() => {
    setErrors(
      validates(
        validateRequired('phone_no'),
        validateRequired('password'),
        validateMaxLength('phone_no', PHONE_NO_MAX_LEN),
        validateMinLength('phone_no', PHONE_NO_MIN_LEN),
        validateMaxLength('password', PASSWORD_MAX_LEN),
        validateMinLength('password', PASSWORD_MIN_LEN),
      )(user, {}),
    );
  }, [user]);

  return (
    <>
      <ToastContainer/>
      <div id='home' className=' flex  justify-center h-screen bg-fixed bg-center bg-cover '>
        <div  className='flex flex-col z-[3] mt-[60px]'>
          <Card className={classes.root}>
            <Container  component="main" maxWidth="xs">
              <Grid align="center" className={'pb-[20px]'}>
                <p className={"font-bold text-2xl "}>Sign In</p>
              </Grid>
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
              <Button onClick={handleSubmit} disabled={buttonClickable} variant="contained" color="primary" fullWidth style={{marginTop:20}}>
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
