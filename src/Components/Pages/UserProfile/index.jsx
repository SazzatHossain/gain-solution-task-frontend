import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
const UserProfile = () => {
  const classes = useStyles();
  return (
    <>
      <div id='home' className=' flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover '>
        <div style={{marginTop: 60}} className='flex flex-col mt-[200px] z-[3]'>
          <div className={classes.root}>
            <Card className={classes.root}>

            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
