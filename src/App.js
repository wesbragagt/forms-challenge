import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import TicketForm from "./components/TicketForm";
import TicketFormFriendly from "./components/TicketFormFriendly";
import Tickets from "./components/TIckets";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={TicketForm} />
          <Route
            path="/user-friendly-form"
            exact
            component={TicketFormFriendly}
          />
          <Route path="/tickets" exact component={Tickets} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
