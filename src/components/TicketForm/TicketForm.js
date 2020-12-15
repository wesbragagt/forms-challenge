import React, { useState } from "react";
import "./TicketForm.css";
import convertTimeToMinutes from "../../utils/convertTimeToMinutes";
import { v4 as uuidv4 } from "uuid";

const TicketForm = () => {
  const nameCharLimit = 10;
  const descriptionCharLimit = 100;
  const dateCharLimit = 10;
  const timeCharLimit = 7;
  const messageDuration = 3000;

  const [ticketName, setTicketName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorClasses, setErrorClasses] = useState("hidden");
  const [successClasses, setSuccessClasses] = useState("hidden");

  const displayError = (message) => {
    setErrorMessage(message);
    setErrorClasses("");
    setTimeout(() => {
      setErrorClasses("hidden");
    }, messageDuration);
  };

  const displaySuccess = () => {
    setSuccessClasses("");
    setTimeout(() => {
      setSuccessClasses("hidden");
    }, messageDuration);
  };

  const handleTicketNameChange = (event) => {
    const updatedTicketName = event.target.value;
    if (updatedTicketName.length <= nameCharLimit) {
      if (!validateTicketName(updatedTicketName)) {
        displayError("Only alphanumeric characters and dashes allowed.");
      } else {
        setTicketName(updatedTicketName);
      }
    } else {
      displayError("Character limit reached.");
    }
  };

  const validateTicketName = (updatedTicketName) => {
    const regex = /^[a-zA-Z0-9-]{0,10}$/;
    return regex.test(updatedTicketName);
  };

  const handleDescriptionChange = (event) => {
    const updatedDescription = event.target.value;
    if (updatedDescription.length <= descriptionCharLimit) {
      if (!validateDescription(updatedDescription)) {
        displayError("Only alphanumeric characters and dashes allowed.");
      } else {
        setDescription(updatedDescription);
      }
    } else {
      displayError("Character limit reached.");
    }
  };

  const validateDescription = (updatedDescription) => {
    const regex = /^[a-zA-Z0-9-]{0,100}$/;
    return regex.test(updatedDescription);
  };

  const handleDateChange = (event) => {
    const updatedDate = event.target.value;
    if (updatedDate.length <= dateCharLimit) {
      if (!validateDate(updatedDate)) {
        displayError("Invalid date for form MM/DD/YYYY.");
      } else {
        setDate(updatedDate);
      }
    } else {
      displayError("Invalid date for form MM/DD/YYYY.");
    }
  };

  const handleStartTimeChange = (event) => {
    const updatedTime = event.target.value.toLowerCase();
    if (updatedTime.length <= timeCharLimit) {
      if (!validateTime(updatedTime)) {
        displayError("Invalid time for form HH:MMam/pm.");
      } else {
        setStartTime(updatedTime);
      }
    } else {
      displayError("Invalid time for form HH:MMam/pm.");
    }
  };

  const handleEndTimeChange = (event) => {
    const updatedTime = event.target.value.toLowerCase();
    if (updatedTime.length <= timeCharLimit) {
      if (!validateTime(updatedTime)) {
        displayError("Invalid time for form HH:MMam/pm.");
      } else {
        setEndTime(updatedTime);
      }
    } else {
      displayError("Invalid time for form HH:MMam/pm.");
    }
  };

  const validateDate = (updatedDate) => {
    const newChar = updatedDate.slice(updatedDate.length - 1);
    let month, day, year;
    switch (updatedDate.length) {
      case 0:
        return true;
      case 1:
        return /^[01]$/.test(newChar);
      case 2:
        month = parseInt(updatedDate);
        return month >= 1 && month <= 12;
      case 3:
      case 6:
        return /^\/$/.test(newChar);
      case 4:
        return /^[0-3]$/.test(newChar);
      case 5:
        if (!/^[0-9]$/.test(newChar)) {
          return false;
        }
        const monthDay = updatedDate.split("/");
        month = parseInt(monthDay[0]);
        day = parseInt(monthDay[1]);
        let thirtyDays = [4, 6, 9, 11];
        let thirtyOneDays = [1, 3, 5, 7, 8, 10, 12];
        if (thirtyDays.includes(month)) {
          return day >= 1 && day <= 30;
        } else if (thirtyOneDays.includes(month)) {
          return day >= 1 && day <= 31;
        } else {
          return day >= 1 && day <= 29;
        }
      case 7:
        return /^[12]$/.test(newChar);
      case 8:
      case 9:
        return /^[0-9]$/.test(newChar);
      case 10:
        if (!/^[0-9]$/.test(newChar)) {
          return false;
        }
        const yearMonthDay = updatedDate.split("/");
        month = parseInt(yearMonthDay[0]);
        day = parseInt(yearMonthDay[1]);
        year = parseInt(yearMonthDay[2]);
        if (month === 2 && day === 29) {
          return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        }
        return true;
      default:
        return false;
    }
  };

  const validateTime = (updatedTime) => {
    const newChar = updatedTime.slice(updatedTime.length - 1);
    switch (updatedTime.length) {
      case 0:
        return true;
      case 1:
        return /^[01]$/.test(newChar);
      case 2:
        if (!/^[0-9]$/.test(newChar)) {
          return false;
        }
        const hr = parseInt(updatedTime);
        return hr >= 1 && hr <= 12;
      case 3:
        return newChar === ":";
      case 4:
        return /^[0-5]$/.test(newChar);
      case 5:
        if (!/^[0-9]$/.test(newChar)) {
          return false;
        }
        const min = parseInt(updatedTime.split(":")[1]);
        return min >= 0 && min <= 59;
      case 6:
        return newChar === "a" || newChar === "p";
      case 7:
        return newChar === "m";
      default:
        return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!ticketName || !description || !date || !startTime || !endTime) {
      displayError("All fields are required.");
      return;
    }
    const timeDifference =
      convertTimeToMinutes(endTime) - convertTimeToMinutes(startTime);
    if (timeDifference < 1) {
      displayError("End time must be later than start time.");
    } else {
      const id = uuidv4();
      let ticket = {
        id: id,
        ticketName,
        description,
        date,
        startTime,
        endTime,
        minutesWorked: timeDifference,
      };

      let currentTickets = JSON.parse(localStorage.getItem("tickets"));
      if (currentTickets) {
        currentTickets.unshift(ticket);
      } else {
        currentTickets = [ticket];
      }
      localStorage.setItem("tickets", JSON.stringify(currentTickets));
      setTicketName("");
      setDescription("");
      setDate("");
      setStartTime("");
      setEndTime("");
      displaySuccess();
    }
  };

  return (
    <div className="ticket-form-wrapper">
      <div id="form-error" className={errorClasses}>
        {errorMessage}
      </div>
      <div id="form-success" className={successClasses}>
        Success! Your ticket has been submitted.
      </div>
      <form
        data-testid="form"
        className="form-group ticket-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="ticket">Ticket Name:</label>
        <input
          data-testid="ticket-input"
          id="ticket"
          type="text"
          onChange={handleTicketNameChange}
          value={ticketName}
          autoFocus
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
          placeholder="MM/DD/YYYY"
          value={date}
        />

        <label htmlFor="startTime">Start Time:</label>
        <input
          data-testid="startTime-input"
          id="startTime"
          type="text"
          onChange={handleStartTimeChange}
          placeholder="HH:MMam/pm"
          value={startTime}
        />

        <label htmlFor="endTime">End Time:</label>
        <input
          data-testid="endTime-input"
          id="endTime"
          type="text"
          onChange={handleEndTimeChange}
          placeholder="HH:MMam/pm"
          value={endTime}
        />

        <button type="submit" className="ticket-form-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
