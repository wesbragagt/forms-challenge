import React from 'react'
import './App.css';
import MomentUtils from '@date-io/moment';
import moment from 'moment'

// UI COMPONENTS
import { Button, Container, TextField, Typography, Grid } from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function App() {

  // Declare state variables
  const [ticketName, setTicketName] = React.useState('');
  const [ticketNameError, setTicketNameError] = React.useState(false)
  const [ticketNameErrorText, setTicketNameErrorText] = React.useState('')
  const [description, setDescription] = React.useState('');
  const [descriptionError, setDescriptionError] = React.useState(false);
  const [descriptionErrorText, setDescriptionErrorText] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());

  // Form Field change handlers
  const handleTicketNameChange = (event) => {
    // Validate field input, set error state and error message
    if (!event.target.value.match(/^[0-9a-z-]+$/)) {
      setTicketNameError(true)
      setTicketNameErrorText("(Max 10 characters, alphanumeric characters and -) example APP-120")
    } else {
      setTicketNameError(false)
      setTicketNameErrorText('')
    }

    // Set field value
    setTicketName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    // Validate field input, set error state and error message
    if (!event.target.value.match(/^[0-9a-z-]+$/)) {
      setDescriptionError(true)
      setDescriptionErrorText("(Max 10 characters, alphanumeric characters and -) example APP-120")
    } else {
      setDescriptionError(false)
      setDescriptionErrorText('')
    }

    // Set field value
    setDescription(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleStartTimeChange = (startTime) => {
    setStartTime(startTime);
  };

  const handleEndTimeChange = (endTime) => {
    setEndTime(endTime);
  };

  // Form Submit Handler
  const handleSubmit = () => {
    const results = {
      TicketName: ticketName,
      Description: description,
      Date: moment(date).format("MM/DD/YYYY"),
      StartTime: moment(startTime).format("hh:mmA"),
      EndTime: moment(endTime).format("hh:mmA")
    }
    console.log(results)
  }

  return (
    <div className="App">
      <Container fixed>
        <form data-testid='form' className='form-group'>

          <Typography variant="h2" gutterBottom>
            Ticket Logger
          </Typography>

          <div>
            <TextField
              margin="normal"
              data-testid='ticket-input'
              id='ticket'
              label="Ticket Name:"
              placeholder=""
              fullWidth
              value={ticketName}
              onChange={handleTicketNameChange}
              inputProps={{ maxLength: 10 }}
              error={ticketNameError}
              helperText={ticketNameErrorText}
            />

            <TextField
              margin="normal"
              data-testid='description-input'
              id='description'
              label="Description:"
              multiline
              fullWidth
              rowsMax={4}
              value={description}
              onChange={handleDescriptionChange}
              inputProps={{ maxLength: 100 }}
            />
          </div>

          <MuiPickersUtilsProvider utils={MomentUtils}>

            <Grid container justify="space-between">
              <KeyboardDatePicker
                margin="normal"
                id="date"
                label="Date:"
                format="MM/DD/yyyy"
                value={date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="startTime"
                data-testid='startTime-input'
                label="Start Time:"
                value={startTime}
                onChange={handleStartTimeChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="endTime"
                data-testid='endTime-input'
                label="End Time:"
                value={endTime}
                onChange={handleEndTimeChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Button
            margin="normal"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </Container>

    </div>
  );
}

export default App;
