import React, { Component } from "react";
import "./style.css";

class Form extends Component {
    // Setting the component's initial state
    state = {
        ticket: '',
        description: '',
        Date: '',
        startTime: '',
        endTime: ''
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit
        event.preventDefault();
        console.log()

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`
            Ticket ID: ${this.state.ticket}
            Description: ${this.state.description}
            Date: ${this.state.Date}
            Start Time: ${this.state.startTime}
            End Time: ${this.state.endTime}
            `);
        this.setState({
            ticket: '',
            description: '',
            Date: '',
            startTime: '',
            endTime: '',
        });
    };

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div>
                <p>
                    Ticket ID: {this.state.ticket} <br />
                    Ticket Description: {this.state.description} <br />
                    Ticket Date: {this.state.Date} <br />
                    Ticket Start Time: {this.state.startTime} <br />
                    Ticket End Time: {this.state.endTime} <br />
                </p>
                <form className="form">
                    <input
                        value={this.state.ticket}
                        name="ticket"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Ticket Name"
                    />
                    <br />
                    <input
                        value={this.state.description}
                        name="description"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Description"
                    />
                    <br />
                    <input
                        value={this.state.Date}
                        name="Date"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Date"
                    />
                    <br />
                    <input
                        value={this.state.startTime}
                        name="startTime"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Start Time"
                    />
                    <br />
                    <input
                        value={this.state.endTime}
                        name="endTime"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="End Time"
                    />
                    <br />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
