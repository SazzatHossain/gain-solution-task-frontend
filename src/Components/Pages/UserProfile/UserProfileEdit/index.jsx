import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Link} from 'react-router-dom';
import {Button, CardActions, CardContent, TextField, Typography} from "@material-ui/core";

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
  return (
    <>
      <div id='home' className=' flex items-center justify-center h-auto my-12 bg-fixed bg-center bg-cover '>
        <div  className='flex flex-col z-[3]'>
          <div className={classes.root}>
            <Card className={classes.root}>
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
                             label='First Name'
                             placeholder="First Name"
                             name={'first_name'}
                             required
                  />
                </div>
                <div className={"flex justify-between my-2"}>
                  <Typography variant="h6"  component="h6">
                    Last Name:
                  </Typography>
                  <TextField variant="outlined"
                             label='Last name'
                             placeholder="Last Name"
                             name={'last_name'}
                             required
                  />
                </div>
                <div className={"flex justify-between my-2"}>
                  <Typography variant="h6"  component="h6">
                    Email:
                  </Typography>
                  <TextField variant="outlined"
                             label='Email'
                             placeholder="Email"
                             type= "email"
                             name={'Email'}
                             required
                  />
                </div>
                <Button onClick={''} variant="contained" color="primary" fullWidth style={{marginTop:20}}>
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
