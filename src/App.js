import React from 'react'
import './App.css';
/**
 * START HERE
 * Good luck!
 */


function App() {
  return (
    <div className="App">
      <form data-testid='form' className='form-group'>
        {/* Ticket Header */}
        <h1>Employee Ticket Form</h1>
        {/* Employee Instructions */}
        <h2>Please fill out the fields below to begin tracking your ticket.</h2>

        {/* Ticket Name input field */}
        <label htmlFor='ticket'>Ticket Name:</label>
        <input data-testid='ticket-input' id='ticket' type='text'/>

        {/* Description input field */}
        <label htmlFor='description'>Description:</label>
        <input data-testid='description-input' id='description' type='text'/>

        {/* Date input field */}
        <label htmlFor='Date'>Date:</label>
        <input data-testid='date-input' id='date' type='text'/>
        
        {/* Start time input field */}
        <label htmlFor='startTime'>Start Time:</label>
        <input data-testid='startTime-input' id='startTime' type='text'/>

        {/* End time input field */}
        <label htmlFor='endTime'>End Time:</label>
        <input data-testid='endTime-input' id='endTime' type='text'/>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
