import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import {Link, useNavigate} from "react-router-dom";
import { useSaveRSVP } from "../../../../Hooks/useSaveRSVP";
import {useFetchUserRsvpResponse} from "../../../../Hooks/useFetchRsvpResponse";
import {ToastContainer} from "react-toastify";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    padding: 16,
  },
});

const EventCard = ({ eventDetail,setRsvp }) => {
  const classes = useStyles();
  const [res, fetchRsvpResponse] = useFetchUserRsvpResponse();
  // let rsvpResponse = res;
  // console.log(rsvpResponse);
  const [data, saveRSVP] = useSaveRSVP();
  const saveRSVPDetail = (attending) => {
    saveRSVP(eventDetail.id, attending);
    setRsvp(data);
  };
  useEffect(() => {
    fetchRsvpResponse(eventDetail?.id);
  }, [fetchRsvpResponse, data]);
  return (
  <Card className={classes.root}>
    <ToastContainer/>
    <CardContent>
        <div className={"flex justify-between items-center "}>
          <Typography gutterBottom variant="h6" component="h6">
            {eventDetail?.title}
          </Typography>
          {JSON.parse(localStorage.getItem("user_id")) ===
          eventDetail?.user_id ? (
            <>
              <Link to={`edit-my-event/${eventDetail.id}`}>
                <Typography
                  className={"cursor-pointer hover:underline"}
                  gutterBottom
                  color="textSecondary"
                  variant="p"
                  component="p"
                >
                  Edit
                </Typography>
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className={"flex justify-between items-center "}>
          <Typography
            className={"cursor-pointer hover:underline"}
            gutterBottom
            color="textSecondary"
            variant="p"
            component="p"
          >
            by {eventDetail?.user_first_name} {eventDetail?.user_last_name}
          </Typography>
          <Typography
            className={"cursor-pointer hover:underline"}
            gutterBottom
            color="textSecondary"
            variant="p"
            component="p"
          >
            {eventDetail?.attending} people are going
          </Typography>
        </div>
        <Typography
          className={"cursor-pointer  mb-2"}
          gutterBottom
          color="textSecondary"
          variant="p"
          component="p"
          mb-2
        >
          <span className="font-bold">Location</span>: {eventDetail?.location}
        </Typography>
        <Typography
          className={"cursor-pointer  mb-2"}
          gutterBottom
          color="textSecondary"
          variant="p"
          component="p"
          mb-2
        >
          <span className="font-bold">From</span>: {eventDetail?.start_time}
        </Typography>
        <Typography
          className={"cursor-pointer mb-2"}
          gutterBottom
          color="textSecondary"
          variant="p"
          component="p"
          mb-2
        >
          <span className="font-bold">To</span>: {eventDetail?.end_time}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Today at 6:15 p.m a iftar party at our plack. Please join.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          size="small"
          color="primary"
          onClick={() => saveRSVPDetail(true)}
        >
          Going
        </Button>
      </CardActions>
    </Card>
  );
};
export default EventCard;
