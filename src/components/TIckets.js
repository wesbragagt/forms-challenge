import React from "react";

const Tickets = () => {
  return (
    <div>
      {tickets.map((ticket) => (
        <Ticket />
      ))}
    </div>
  );
};

export default Tickets;
