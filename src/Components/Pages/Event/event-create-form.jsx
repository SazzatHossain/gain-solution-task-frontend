import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Button, Container, Grid, TextField} from "@material-ui/core";
import {useSaveEventDetail} from "../../../Hooks/useCreateEvents";

const useStyles = makeStyles({
  root: {
    minHeight: 350,
    width: 500,
    padding: 16
  }
});

const EventCreateForm = ({event, setEvent}) => {
  const classes = useStyles();
  const [, saveEvent] = useSaveEventDetail();

  const handleChange = (event) => {
    setEvent((prevValue) => ({...prevValue, [event.target.name]: event.target.value}));
  };
  console.log(event);

  const saveEventDetail = () => {
    saveEvent(event);
  };

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
                   name={'title'}
                   required
                   onChange={handleChange}

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
          onChange={handleChange}
        />
        <br/><br/>
        <TextField variant="outlined"
                   label="Location"
                   placeholder="Input address"
                   name={"location"}
                   fullWidth
                   required
                   onChange={handleChange}
        />
        <br/><br/>
        <TextField variant="outlined"
                   placeholder="Starting at"
                   name={"start_time"}
                   type='datetime-local'
                   fullWidth
                   required
                   onChange={handleChange}
        />
        <br/><br/>
        <TextField variant="outlined"
                   placeholder="End at"
                   name={"end_time"}
                   type='datetime-local'
                   fullWidth
                   required
                   onChange={handleChange}
        />
        <Button  onClick={saveEventDetail} variant="contained" color="primary" fullWidth style={{marginTop:20}}>
          <span style={{color: "#ffffff", fontWeight: "bold"}}>Create Event</span>
        </Button>
      </Container>
    </Card>
  );
}
export default EventCreateForm;
