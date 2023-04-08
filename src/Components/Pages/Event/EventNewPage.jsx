import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import EventCreateForm from "./event-create-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3)
    }
  }
}));

const EventNewPage = () => {
  const [event, setEvent] = useState({});

  useEffect(() => {
    setEvent({});
  }, []);

  const classes = useStyles();
  return (
    <>
      <div id='home' className=' flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover '>
        <div style={{marginTop: 60}} className='flex flex-col mt-[200px] z-[3]'>
          <div className={classes.root}>
            <EventCreateForm event={event} setEvent={setEvent} />
          </div>
        </div>
      </div>
    </>

  );
};

export default EventNewPage;
