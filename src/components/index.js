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
        // Validating input
        if (name === 'ticket') {
            if (value.ticket.length > 10) {
                alert('Ticket Name must not exceed 10 characters!')
            }
        } 
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit
        event.preventDefault();
        console.log()

        // Alert the user their ticket information
        alert(`
            Ticket Name: ${this.state.ticket}
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
        return (
            <div>
                <h1>
                    Employee Ticket Form
                </h1>
                <h3>
                    Please fill out the input fields below
                </h3>
                <p>
                    Ticket Name: {this.state.ticket} <br />
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
                        placeholder="Ticket Name (Max 10 char.)"
                    />
                    <br />
                    <input
                        value={this.state.description}
                        name="description"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Description (Max 100 char.)"
                    />
                    <br />
                    <input
                        value={this.state.Date}
                        name="Date"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Date (MM/DD/YYYY)"
                    />
                    <br />
                    <input
                        value={this.state.startTime}
                        name="startTime"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Start Time (Max 7 char.)"
                    />
                    <br />
                    <input
                        value={this.state.endTime}
                        name="endTime"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="End Time (Max 7 char.)"
                    />
                    <br />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
