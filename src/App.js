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
        <label htmlFor='ticket'>Ticket Name:</label>
        <input data-testid='ticket-input' id='ticket' type='text'/>

        <label htmlFor='description'>Description:</label>
        <input data-testid='description-input' id='description'/>

        <label htmlFor='Date'>Date:</label>
        <input data-testid='date-input' id='date' type='text'/>

        <label htmlFor='startTime'>Start Time:</label>
        <input data-testid='startTime-input' id='startTime' type='text'/>

        <label htmlFor='endTime'>End Time:</label>
        <input data-testid='endTime-input' id='endTime' type='text'/>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
