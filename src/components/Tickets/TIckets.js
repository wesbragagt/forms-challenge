import React, { useState, useEffect } from "react";
import Ticket from "../Ticket/Ticket";
import "./Tickets.css";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [displayLimit, setDisplayLimit] = useState(1);
  const [displayInterval] = useState(1);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets"));
    if (storedTickets) {
      setTickets(storedTickets);
    }
    setLoaded(true);
  }, []);

  const seeMore = () => {
    setDisplayLimit(displayLimit + displayInterval);
  };

  return (
    <div className="tickets-wrapper">
      <h1>My Tickets</h1>
      {!loaded
        ? "Loading..."
        : tickets.length > 0
        ? tickets
            .slice(0, displayLimit)
            .map((ticket) => <Ticket key={ticket.id} data={ticket} />)
        : "You haven't submitted any tickets yet."}
      {loaded && displayLimit < tickets.length ? (
        <button className="see-more-button" onClick={seeMore}>
          See More
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Tickets;
