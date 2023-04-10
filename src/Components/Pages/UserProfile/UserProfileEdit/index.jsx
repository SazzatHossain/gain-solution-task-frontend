import React, {useState, useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Link} from 'react-router-dom';
import {Button, CardActions, CardContent, TextField, Typography} from "@material-ui/core";
import {useFetchUserProfileDetail} from "../../../../Hooks/useFetchUserProfile";
import {useUpdateUserInfo} from "../../../../Hooks/useUpdateUserInfo";
import {ToastContainer} from "react-toastify";
import {validateMaxLength, validateMinLength, validateRequired, validates} from "../../../FormValidator/Validator";
import {
  EMAIL_MAX_LEN, FIRST_NAME_MAX_LEN, FIRST_NAME_MIN_LEN, LAST_NAME_MAX_LEN, LAST_NAME_MIN_LEN,
} from "../../../../Constants/general";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    },
    minWidth: 500
  }
}));
const UserProfileEdit = () => {
  const classes = useStyles();
  const [res, fetchUser] = useFetchUserProfileDetail();
  const [,updateUser] = useUpdateUserInfo();
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    const userInfo = res?.data?.user;
    setUser({
      id: userInfo?.id,
      first_name: userInfo?.first_name,
      last_name: userInfo?.last_name,
      email: userInfo?.email,
    });
  }, [res]);
  const handleChange = (event) => {
    setUser((prevValue) => ({...prevValue, [event.target.name]: event.target.value}));
  };

  const saveUserDetail = () => {
    updateUser(user);
  };

  ///////////// form validation
  let buttonClickable = false;
  if (!user.first_name?.length > 0 || !user.last_name?.length > 0 || !user.email?.length > 0  ||  errors.first_name?.length > 0 || errors.last_name?.length > 0 || errors.email?.length > 0 || errors.password?.length > 0) {
    buttonClickable = true;
  }

  useEffect(() => {
    setErrors(
      validates(
        validateRequired('first_name'),
        validateRequired('last_name'),
        validateRequired('email'),
        validateMaxLength('email', EMAIL_MAX_LEN),
        validateMaxLength('first_name', FIRST_NAME_MAX_LEN),
        validateMinLength('first_name', FIRST_NAME_MIN_LEN),
        validateMaxLength('last_name', LAST_NAME_MAX_LEN),
        validateMinLength('last_name', LAST_NAME_MIN_LEN),
      )(user, {}),
    );
  }, [user]);

  return (
    <>
      <ToastContainer/>
      <div id='home' className=' flex items-center justify-center h-auto my-12 bg-fixed bg-center bg-cover '>
        <div  className='flex flex-col z-[3]'>
          <div className={classes.root}>
            <Card className={classes.root} style={{borderRadius: 30, boxShadow: "5px 10px 5px  #f50057"}}>
              <CardContent>
                <div className={"flex justify-between items-center my-2"}>
                  <Typography gutterBottom variant="h5" component="h2">
                    User Information
                  </Typography>
                  <Link to="/user-profile">
                    <Typography className={"cursor-pointer hover:underline"} gutterBottom variant="h6" component="h6">
                      Back
                    </Typography>
                  </Link>
                </div>
                <div className={"flex justify-between my-2"}>
                  <Typography variant="h6"  component="h6">
                    First Name:
                  </Typography>
                  <TextField variant="outlined"
                             placeholder="First Name"
                             name={'first_name'}
                             required
                             value={user?.first_name}
                             onChange={handleChange}
                             error={Boolean(errors?.first_name)}
                             helperText={(errors?.first_name)}
                  />
                </div>
                <div className={"flex justify-between my-2"}>
                  <Typography variant="h6"  component="h6">
                    Last Name:
                  </Typography>
                  <TextField variant="outlined"
                             placeholder="Last Name"
                             name={'last_name'}
                             required
                             value={user?.last_name}
                             onChange={handleChange}                         error={Boolean(errors?.first_name)}
                             helperText={(errors?.last_name)}
                  />
                </div>
                <div className={"flex justify-between my-2"}>
                  <Typography variant="h6"  component="h6">
                    Email:
                  </Typography>
                  <TextField variant="outlined"
                             placeholder="Email"
                             type= "email"
                             name={'email'}
                             required
                             value={user?.email}
                             onChange={handleChange}
                             error={Boolean(errors?.first_name)}
                             helperText={(errors?.email)}
                  />
                </div>
                <Button disabled={buttonClickable} onClick={saveUserDetail} variant="contained" color="secondary" fullWidth style={{marginTop:20}}>
                  <span style={{color: "#ffffff", fontWeight: "bold"}}>Update info</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileEdit;
