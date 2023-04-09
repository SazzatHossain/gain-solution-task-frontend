import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {Button, Container, Grid, TextField} from "@material-ui/core";
import {useSaveEventDetail} from "../../../Hooks/useCreateEvents";
import {validateMaxLength, validateMinLength, validateRequired, validates} from "../../FormValidator/Validator";
import {
  DESCRIPTION_NO_MAX_LEN,
  DESCRIPTION_NO_MIN_LEN,
  EMAIL_MAX_LEN,
  FIRST_NAME_MAX_LEN,
  FIRST_NAME_MIN_LEN,
  LAST_NAME_MAX_LEN,
  LAST_NAME_MIN_LEN,
  LOCATION_NO_MAX_LEN,
  LOCATION_NO_MIN_LEN,
  PASSWORD_MAX_LEN,
  PASSWORD_MIN_LEN,
  PHONE_NO_MAX_LEN,
  PHONE_NO_MIN_LEN,
  TITLE_NO_MAX_LEN,
  TITLE_NO_MIN_LEN
} from "../../../Constants/general";
import {ToastContainer} from "react-toastify";

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
  const [errors, setErrors] = useState();

  const handleChange = (event) => {
    setEvent((prevValue) => ({...prevValue, [event.target.name]: event.target.value}));
  };
  console.log(event);

  const saveEventDetail = () => {
    saveEvent(event);
  };
  ///////////// form validation
  let buttonClickable = false;
  if (!event.title?.length > 0 || !event.description?.length > 0 || !event.location?.length > 0 || !event.start_time?.length > 0 || !event.end_time?.length > 0 ||  errors.title?.length > 0 || errors.description?.length > 0 || errors.location?.length > 0 || errors.start_time?.length > 0 || errors.end_time?.length > 0) {
    buttonClickable = true;
  }

  useEffect(() => {
    setErrors(
      validates(
        validateRequired('title'),
        validateRequired('location'),
        validateRequired('description'),
        validateRequired('start_time'),
        validateRequired('end_time'),
        validateMaxLength('title', TITLE_NO_MAX_LEN),
        validateMinLength('title', TITLE_NO_MIN_LEN),
        validateMaxLength('description', DESCRIPTION_NO_MAX_LEN),
        validateMinLength('description', DESCRIPTION_NO_MIN_LEN),
        validateMaxLength('location', LOCATION_NO_MAX_LEN),
        validateMinLength('location', LOCATION_NO_MIN_LEN),
      )(event, {}),
    );
  }, [event]);

  return (
    <Card className={classes.root}>
      <ToastContainer/>
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
                   error={Boolean(errors?.title)}
                   helperText={(errors?.title)}

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
          error={Boolean(errors?.description)}
          helperText={(errors?.description)}
        />
        <br/><br/>
        <TextField variant="outlined"
                   label="Location"
                   placeholder="Input address"
                   name={"location"}
                   fullWidth
                   required
                   onChange={handleChange}
                   error={Boolean(errors?.location)}
                   helperText={(errors?.location)}
        />
        <br/><br/>
        <TextField variant="outlined"
                   placeholder="Starting at"
                   name={"start_time"}
                   type='datetime-local'
                   fullWidth
                   required
                   onChange={handleChange}
                   error={Boolean(errors?.start_time)}
                   helperText={(errors?.start_time)}
        />
        <br/><br/>
        <TextField variant="outlined"
                   placeholder="End at"
                   name={"end_time"}
                   type='datetime-local'
                   fullWidth
                   required
                   onChange={handleChange}
                   error={Boolean(errors?.end_time)}
                   helperText={(errors?.end_time)}
        />
        <Button  onClick={saveEventDetail} disabled={buttonClickable} variant="contained" color="primary" fullWidth style={{marginTop:20}}>
          <span style={{color: "#ffffff", fontWeight: "bold"}}>Create Event</span>
        </Button>
      </Container>
    </Card>
  );
}
export default EventCreateForm;
