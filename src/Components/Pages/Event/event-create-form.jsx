import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Button, Container, Grid, TextField} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: 350,
    width: 500,
    padding: 16
  }
});

const EventCreateForm = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Container  component="main" maxWidth="xs">
        <Grid align="center" style={{paddingBottom: 20}}>
          <p style={{fontWeight:"bold", fontSize: 20}}>Create a event</p>
        </Grid>
        <TextField variant="outlined"
                   label='Event title'
                   placeholder="Event title"
                   fullWidth
                   name={'event_title'}
                   required

        />
        <br/><br/>
        <TextField
          multiline
          minRows={4}
          aria-label="minimum height"
          variant="outlined"
          label='Event description'
          placeholder="Event description"
          style={{ width: "100%" }}
          name={'description'}
        />
        <br/><br/>
        <TextField variant="outlined"
                   label="Location"
                   placeholder="Input address"
                   name={"password"}
                   fullWidth
                   required
        />
        <br/><br/>
        <TextField variant="outlined"
                   placeholder="Starting at"
                   name={"password"}
                   type='datetime-local'
                   fullWidth
                   required
        />
        <br/><br/>
        <TextField variant="outlined"
                   placeholder="End at"
                   name={"password"}
                   type='datetime-local'
                   fullWidth
                   required
        />
        <Button  variant="contained" color="primary" fullWidth style={{marginTop:20}}>
          <span style={{color: "#ffffff", fontWeight: "bold"}}>Create Event</span>
        </Button>
      </Container>
    </Card>
  );
}
export default EventCreateForm;
