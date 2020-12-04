import './App.css';
/**
 * START HERE
 * Good luck!
 */
function App() {
  return (
    <div className="App">
      <form className='form-group'>
        <label htmlFor='ticket'>Ticket Name</label>
        <input id='ticket' type='text'/>

        <label htmlFor='description'>Description</label>
        <input id='description'/>

        <label htmlFor='Date'>Date</label>
        <input id='date' type='text'/>

        <label htmlFor='startTime'>Start Time</label>
        <input id='startTime' type='text'/>

        <label htmlFor='endTime'>End Time</label>
        <input id='endTime' type='text'/>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
