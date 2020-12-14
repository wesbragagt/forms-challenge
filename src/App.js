import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import TicketForm from "./components/TicketForm/TicketForm";
import Tickets from "./components/Tickets/TIckets";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={TicketForm} />
          <Route path="/tickets" exact component={Tickets} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
