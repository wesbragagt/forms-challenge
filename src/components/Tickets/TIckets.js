import React, { useState, useEffect } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets"));
    if (storedTickets) {
      setTickets(storedTickets);
    }
  }, []);

  return (
    <div>
      <h1>Tickets</h1>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} data={ticket} />
      ))}
    </div>
  );
};

export default Tickets;
