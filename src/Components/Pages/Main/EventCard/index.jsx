import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Button, CardActions, CardContent, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useSaveRSVP} from "../../../../Hooks/useSaveRSVP";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    padding: 16
  }
});

const EventCard = ({eventDetail}) => {
  const classes = useStyles();
  const [, saveRSVP] = useSaveRSVP();
  const saveRSVPDetail = (attending) => {
    saveRSVP(eventDetail.id, attending);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={"flex justify-between items-center "}>
          <Typography gutterBottom variant="h6" component="h6">
            {eventDetail?.title}
          </Typography>
          <Link to="/user-profile-edit">
            <Typography className={"cursor-pointer hover:underline"} gutterBottom color="textSecondary" variant="p" component="p">
              {eventDetail?.attending} people are going
            </Typography>
          </Link>
        </div>
        <Typography className={"cursor-pointer  mb-2"} gutterBottom color="textSecondary" variant="p" component="p" mb-2>
          <span className='font-bold'>Location</span>: {eventDetail?.location}
        </Typography>
        <Typography className={"cursor-pointer  mb-2"} gutterBottom color="textSecondary" variant="p" component="p" mb-2>
         <span className='font-bold'>From</span>: {eventDetail?.start_time}
        </Typography>
        <Typography className={"cursor-pointer mb-2"} gutterBottom color="textSecondary" variant="p" component="p" mb-2>
         <span className='font-bold'>To</span>: {eventDetail?.end_time}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Today at 6:15 p.m a iftar party at our plack. Please join.
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <Button size="small" color="primary" onClick={() => saveRSVPDetail(true)}>
          Going
        </Button>
        <Button size="small" color="secondary" onClick={() => saveRSVPDetail(false)}>
          Not going
        </Button>
      </CardActions>
    </Card>
  );
}
export default EventCard;
