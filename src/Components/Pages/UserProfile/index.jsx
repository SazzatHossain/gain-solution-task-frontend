import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Link} from 'react-router-dom';
import {Button, CardActions, CardContent, Typography} from "@material-ui/core";
import {useFetchUserProfileDetail} from "../../../Hooks/useFetchUserProfile";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    },
    minWidth: 500
  }
}));
const UserProfile = () => {
  const classes = useStyles();
  const [res, fetchUser] = useFetchUserProfileDetail();
  let userInfo = res?.data?.user;
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <>
      <div id='home' className=' flex items-center justify-center h-auto my-12 bg-fixed bg-center bg-cover '>
        <div  className='flex flex-col z-[3]'>
          <div className={classes.root}>
            <Card className={classes.root} style={{borderRadius: 30, boxShadow: "5px 10px 5px #f50057"}}>
              <CardContent>
                <div className={"flex justify-between items-center my-2"}>
                  <Typography gutterBottom variant="h5" component="h2">
                    User Information
                  </Typography>
                  <Link to="/user-profile-edit">
                    <Typography className={"cursor-pointer hover:underline"} gutterBottom variant="h6" component="h6">
                      Edit
                    </Typography>
                  </Link>
                </div>
                <div className={"flex justify-between my-2"}>
                  <Typography variant="h6"  component="h6">
                    First Name:
                  </Typography>
                  <Typography variant="h6" color="textSecondary" component="h6">
                    {userInfo?.first_name}
                  </Typography>
                </div>
                <div className={"flex justify-between my-2"}>
                  <Typography variant="h6"  component="h6">
                    Last Name:
                  </Typography>
                  <Typography variant="h6" color="textSecondary" component="h6">
                    {userInfo?.last_name}
                  </Typography>
                </div>
                <div className={"flex justify-between my-2"}>
                  <Typography variant="h6"  component="h6">
                    Phone No:
                  </Typography>
                  <Typography variant="h6" color="textSecondary" component="h6">
                    {userInfo?.phone_no}
                  </Typography>
                </div>
                <div className={"flex justify-between my-2"}>
                  <Typography variant="h6"  component="h6">
                    Email:
                  </Typography>
                  <Typography variant="h6" color="textSecondary" component="h6">
                    {userInfo?.email}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
