import React from 'react'
import './App.css';

// UI COMPONENTS
import { Button, Container, TextField, Typography } from '@material-ui/core';


function App() {

  const [ticketName, setTicketName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleTicketNameChange = (event) => {
    setTicketName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="App">
      <Container fixed>
        <form data-testid='form' className='form-group'>

          <Typography variant="h2" gutterBottom>
            Ticket Logger
          </Typography>

          <div mb={4}>
            <TextField
              data-testid='ticket-input'
              id='ticket'
              label="Ticket Name:"
              placeholder=""
              helperText="Full width!"
              fullWidth
              value={ticketName}
              onChange={handleTicketNameChange}
            />

            <TextField
              data-testid='description-input'
              id='description'
              label="Description:"
              multiline
              fullWidth
              rowsMax={4}
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>

          {/* <label htmlFor='ticket'>Ticket Name:</label>
      <input data-testid='ticket-input' id='ticket' type='text'/>

      <label htmlFor='description'>Description:</label>
      <input data-testid='description-input' id='description'/>

      <label htmlFor='Date'>Date:</label>
      <input data-testid='date-input' id='date' type='text'/>

      <label htmlFor='startTime'>Start Time:</label>
      <input data-testid='startTime-input' id='startTime' type='text'/>

      <label htmlFor='endTime'>End Time:</label>
      <input data-testid='endTime-input' id='endTime' type='text'/> */}
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </form>
      </Container>

    </div>
  );
}

export default App;
