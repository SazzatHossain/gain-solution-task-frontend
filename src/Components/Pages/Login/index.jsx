import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Button, Container, Grid, TextField, Typography} from "@material-ui/core";
import {useFetchLoginToken} from "../../../Hooks/useFetchLoginToken";
import {toast} from "react-toastify";

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

  const handleChange = (event) => {
    setUser((prevValue) => ({...prevValue, [event.target.name]: event.target.value}));
  };
  const handleSubmit = async () => {
    if (user.phone_no !== "" && user.password !== "") {
      fetchLogin(user.phone_no, user.password);
    } else {
      toast.error("All fields must be filled", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000
      });
    }
  };
  return (
    <>
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
              <Button onClick={handleSubmit}  variant="contained" color="primary" fullWidth style={{marginTop:20}}>
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
