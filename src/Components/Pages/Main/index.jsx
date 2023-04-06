import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import EventCard from "./EventCard";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
const Main = () => {
  const classes = useStyles();
  return (
    <>
      <div id='home' className=' flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover '>
        <div style={{marginTop: 60}} className='flex flex-col mt-[200px] z-[3]'>
          <div className={classes.root}>
            <EventCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
