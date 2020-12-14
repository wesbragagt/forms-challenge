import React from "react";
import "./Ticket.css";

const Ticket = ({ data }) => {
  const getTimeString = () => {
    let hours = 0;
    let minutes = data.minutesWorked;
    while (minutes > 60) {
      hours += 1;
      minutes -= 60;
    }
    return `${hours} ${hours === 1 ? "hour" : "hours"} and ${minutes} ${
      minutes === 1 ? "minute" : "minutes"
    }`;
  };

  return (
    <div className="ticket">
      <h3 className="ticket-title">{data.ticketName}</h3>
      <p>
        <b>Description:</b> {data.description}
      </p>
      <p>
        <b>Start time:</b> {data.startTime}
      </p>
      <p>
        <b>End time:</b> {data.endTime}
      </p>
      <p>
        <b>Time worked:</b> {getTimeString()}
      </p>
    </div>
  );
};

export default Ticket;
