import React, { useState } from "react";

const TicketForm = () => {
  const [ticketName, setTicketName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleTicketNameChange = (event) => {
    setTicketName(event.target.value);
    // validate with regex, set error
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    //validate with regex, set error
  };

  // TODO calendar?
  const handleDateChange = (event) => {
    return undefined;
  };

  // TODO dropdown? time field of some kind?
  const handleStarTimeChange = (event) => {
    return undefined;
  };

  // TODO dropdown? time field of some kind?
  const handleEndTimeChange = (event) => {
    return undefined;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ ticketName, description });
    return undefined;
  };

  // inputs: 'hh:mmam' or 'hh:mmpm', output: '${hours} hours and ${minutes} minutes'
  const calculateTimeDifference = (startTimeString, endTimeString) => {
    return undefined;
  };

  return (
    <form data-testid="form" className="form-group" onSubmit={handleSubmit}>
      <label htmlFor="ticket">Ticket Name:</label>
      <input
        data-testid="ticket-input"
        id="ticket"
        type="text"
        onChange={handleTicketNameChange}
        value={ticketName}
      />

      <label htmlFor="description">Description:</label>
      <input
        data-testid="description-input"
        id="description"
        onChange={handleDescriptionChange}
        value={description}
      />

      <label htmlFor="Date">Date:</label>
      <input
        data-testid="date-input"
        id="date"
        type="text"
        onChange={handleDateChange}
        value={date}
      />

      <label htmlFor="startTime">Start Time:</label>
      <input
        data-testid="startTime-input"
        id="startTime"
        type="text"
        onChange={handleStarTimeChange}
        value={startTime}
      />

      <label htmlFor="endTime">End Time:</label>
      <input
        data-testid="endTime-input"
        id="endTime"
        type="text"
        onChange={handleEndTimeChange}
        value={endTime}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default TicketForm;
