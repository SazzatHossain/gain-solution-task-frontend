import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import EventUpdateForm from "./event-update-form";
import {useFetchMyEventDetail} from "../../../Hooks/useFetchEventDetail";
import {useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3)
    }
  }
}));

const EventEditPage = () => {
  const classes = useStyles();
  const {eventId} = useParams();
  const [event, setEvent] = useState({});
  const [response, fetchMyEventDetail] = useFetchMyEventDetail();

  useEffect(() => {
    fetchMyEventDetail(eventId);
  }, [fetchMyEventDetail]);
  useEffect(() => {
    const eventInfo = response?.data?.event;
    setEvent({
      id: eventInfo?.id,
      title: eventInfo?.title,
      location: eventInfo?.location,
      description: eventInfo?.description,
      start_at: eventInfo?.start_at,
      end_at: eventInfo?.end_at,
    });
  }, [response]);
  return (
    <>
      <div id='home' className=' flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover '>
        <div style={{marginTop: 60}} className='flex flex-col mt-[200px] z-[3]'>
          <div className={classes.root}>
            <EventUpdateForm event={event} setEvent={setEvent} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventEditPage;
