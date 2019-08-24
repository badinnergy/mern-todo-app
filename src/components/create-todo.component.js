import React, { Component } from 'react'
import axios from 'axios'

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    failure = (alertContainer) => {
        const failure = document.createElement('div');
        setAttributes(failure, {
            "class":"alert alert-danger alert-dismissible fade show",
            "role":"alert"
        });
        const failureText = document.createTextNode('Please fill in all of the fields!');
        failure.appendChild(failureText);

        const dismissBtn = document.createElement('button');
        setAttributes(dismissBtn, {
            "type":"button",
            "class":"close",
            "data-dismiss":"alert",
            "aria-label":"Close"
        })

        const dismissIcon = document.createElement('span');
        dismissIcon.setAttribute("aria-hidden", "true");
        dismissIcon.innerText = "Okay";

        dismissBtn.appendChild(dismissIcon);

        failure.appendChild(dismissBtn);

        alertContainer.appendChild(failure);
    }

    success = (alertContainer) => {
        const success = document.createElement('div');
        setAttributes(success, {
            "class":"alert alert-success alert-dismissible fade show",
            "role":"alert"
        });
        const successText = document.createTextNode('Todo successfully added!');
        success.appendChild(successText);

        const dismissBtn = document.createElement('button');
        setAttributes(dismissBtn, {
            "type":"button",
            "class":"close",
            "data-dismiss":"alert",
            "aria-label":"Close"
        })

        const dismissIcon = document.createElement('span');
        dismissIcon.setAttribute("aria-hidden", "true");
        dismissIcon.innerText = "Okay";

        dismissBtn.appendChild(dismissIcon);

        success.appendChild(dismissBtn);

        alertContainer.appendChild(success);
    }

    onSubmit(e) {
        e.preventDefault();
        
        const alertContainer = document.getElementById('alert-container');

        if ((this.state.todo_description.length === 0) ||
            (this.state.todo_responsible.length === 0) ||
            (this.state.todo_priority.length === 0)) {
            this.failure(alertContainer);
        } else {
            this.success(alertContainer);
            
            console.log(`Form submitted:`);
            console.log(`Todo Description: ${this.state.todo_description}`);
            console.log(`Todo Responsible: ${this.state.todo_responsible}`);
            console.log(`Todo Priority: ${this.state.todo_priority}`);

            const newTodo = {
                todo_description: this.state.todo_description,
                todo_responsible: this.state.todo_responsible,
                todo_priority: this.state.todo_priority,
                todo_completed: this.state.todo_completed
            };

            axios.post('http://localhost:4000/todos/create', newTodo)
                .then(res => console.log(res.data));
            
            this.setState({
                todo_description: '',
                todo_responsible: '',
                todo_priority: '',
                todo_completed: false
            })
        }
    }

    render() {
        return (
            <div>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                            type="text"
                            id="description"
                            className="form-control"
                            value={this.state.todo_description}
                            onChange={this.onChangeTodoDescription}
                        />
                    </div>
                    <div>
                        <label>Responsible: </label>
                        <input
                            type="text"
                            id="responsible"
                            className="form-control"
                            value={this.state.todo_responsible}
                            onChange={this.onChangeTodoResponsible}
                        />
                    </div>
                    <div className="form-group" id="priority">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.todo_priority==='Low'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.todo_priority==='Medium'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.todo_priority==='High'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
                <div id="alert-container"></div>
            </div>
        )
    }
}

// obtained from SO: https://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript
function setAttributes(el, attributes) {
    for(var key in attributes) {
        el.setAttribute(key, attributes[key]);
    }
}