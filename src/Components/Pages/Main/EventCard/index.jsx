import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Button, CardActions, CardContent, Typography} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    padding: 16
  }
});

const EventCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          CardActions Example
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          CardActions are just a flexbox component that wraps the children in
          8px of padding and 8px horizontal padding between children.
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <Button size="small" color="primary">
          Going
        </Button>
        <Button size="small" color="secondary">
          Not going
        </Button>
      </CardActions>
    </Card>
  );
}
export default EventCard;
