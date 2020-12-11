import React, { useState } from 'react'
import './App.css';
/**
 * START HERE
 * Good luck!
 */
function App() {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  handleNameChange = () => {
    return undefined;
  }

  handleDescriptionChange = () => {
    return undefined;
  }

  handleDateChange =() => {
    return undefined;
  }

  handleStarTimeChange = () => {
    return undefined;
  }

  handleEndTimeChange = () => {
    return undefined;
  }

  handleSubmit = () => {
    return undefined;
  }

  return (
    <div className="App">
      <form data-testid='form' className='form-group'>
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

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
