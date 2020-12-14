import React from 'react'
import './App.css';
import MomentUtils from '@date-io/moment';
import moment from 'moment'

// UI COMPONENTS
import {
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  InputLabel
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Alert } from '@material-ui/lab';
import SubmissionDialog from './components/SubmissionDialog'

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
  const [isFormValid, setFormValid] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [fullTicket, setFullTicket] = React.useState({});

  // Form Field change handlers
  const handleTicketNameChange = (event) => {
    const inputVal = event.target.value;
    // Validate field input, set error state and error message
    if (inputVal.match(/^[0-9a-zA-Z-]+$/) && (inputVal.length <= 10)) {
      setTicketNameError(false)
      setTicketNameErrorText('')
      // Set field value
      setTicketName(inputVal);
    }
    else {
      setTicketNameError(true)
      setTicketNameErrorText("(Max 10 characters, alphanumeric characters and -)")
      if (inputVal.length === 0) {
        setTicketName(inputVal);
      }
    }
  };

  const handleDescriptionChange = (event) => {
    const inputVal = event.target.value;
    // Validate field input, set error state and error message
    if (inputVal.match(/^[0-9a-zA-Z-,. ]+$/) && (inputVal.length <= 100)) {
      setDescriptionError(false)
      setDescriptionErrorText('')
      // Set field value
      setDescription(inputVal);
    }
    else {
      setDescriptionError(true)
      setDescriptionErrorText("(Max 100 characters, alphanumeric characters and -)")
      if (inputVal.length === 0) {
        setDescription(inputVal);
      }
    }

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
    // Check if any component is in an error state
    if (!ticketNameError &&
      !descriptionError &&
      ticketName.length &&
      description.length &&
      moment(date).isValid() &&
      moment(startTime).isValid() &&
      moment(endTime).isValid()) {

      // handle output
      const results = {
        ticketName: ticketName,
        description: description,
        date: moment(date).format("MM/DD/YYYY"),
        startTime: moment(startTime).format("hh:mmA"),
        endTime: moment(endTime).format("hh:mmA"),
        duration: `${moment(endTime).diff(moment(startTime), 'hours')} hours and ${moment(endTime).diff(moment(startTime), 'minutes') % 60} minutes`
      }
      setFullTicket(results)
      setFormValid(true)
      showSubmissionDialog()
      console.log(fullTicket)
    } else {
      setFormValid(false)
      console.log("Fix errors before submitting");
    }
  }


  const showSubmissionDialog = () => {
    setOpen(true);
  };

  const hideSubmissionDialog = () => {
    clearForm()
    setOpen(false);
  };

  const clearForm = () => {
    setTicketName('')
    setTicketNameError(false)
    setTicketNameErrorText('')
    setDescription('')
    setDescriptionError(false)
    setDescriptionErrorText('')
    setDate(new Date())
    setStartTime(new Date())
    setEndTime(new Date())
    setFullTicket({})
  }

  const renderValidationAlert = () => {
    if (!isFormValid) {
      return <Alert severity="error">Fix all errors before submitting</Alert>
    }
  }


  return (
    <div className="App">
      <Container fixed>
        <form data-testid='form' className='form-group'>

          <Typography variant="h2" gutterBottom>
            Ticket Logger
          </Typography>

          {renderValidationAlert()}

          <Grid>
            <TextField
              margin="normal"
              id='ticket'
              label="Ticket Name:"
              placeholder=""
              fullWidth
              value={ticketName}
              onChange={handleTicketNameChange}
              inputProps={{ maxLength: 10, 'data-testid': 'ticket-input' }}
              error={ticketNameError}
              helperText={ticketNameErrorText}
              required
            />
          </Grid>
          <Grid>

            <TextField
              margin="normal"
              id='description'
              label="Description:"
              multiline
              fullWidth
              rowsMax={4}
              value={description}
              onChange={handleDescriptionChange}
              inputProps={{ maxLength: 100, 'data-testid': 'description-input' }}
              error={descriptionError}
              helperText={descriptionErrorText}
              required
            />
          </Grid>

          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid container justify="space-between">
              <KeyboardDatePicker
                margin="normal"
                id="date"
                label="Date:"
                format="MM/DD/yyyy"
                value={date}
                onChange={handleDateChange}
                inputProps={{ 'data-testid': 'date-input' }}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="startTime"
                label="Start Time:"
                value={startTime}
                onChange={handleStartTimeChange}
                inputProps={{ 'data-testid': 'startTime-input' }}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="endTime"
                label="End Time:"
                value={endTime}
                onChange={handleEndTimeChange}
                inputProps={{ 'data-testid': 'endTime-input' }}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
              <div className="duration">
                <InputLabel shrink className="duration-label">Duration:</InputLabel>
                {`${moment(endTime).diff(moment(startTime), 'hours')} hours and ${moment(endTime).diff(moment(startTime), 'minutes') % 60} minutes`}
              </div>
            </Grid>
          </MuiPickersUtilsProvider>

          <Grid>
            <Button
              margin="normal"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit Ticket
          </Button>
          </Grid>
        </form>
      </Container>
      <SubmissionDialog
        open={open}
        fullTicket={fullTicket}
        handleClose={hideSubmissionDialog}
      />
    </div>
  );
}

export default App;
