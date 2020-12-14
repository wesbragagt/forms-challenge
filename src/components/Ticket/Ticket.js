import React from "react";

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
    <div class="ticket">
      <p>Name: {data.ticketName}</p>
      <p>Description: {data.description}</p>
      <p>Start time: {data.startTime}</p>
      <p>End time: {data.endTime}</p>
      <p>Time worked: {getTimeString()}</p>
    </div>
  );
};

export default Ticket;
