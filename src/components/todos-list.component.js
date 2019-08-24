import React, { Component } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import axios from 'axios'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'

const Todo = (props) => {
    return (
        <tr>
            <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
            <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
            <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
            <td>
                <RouterLink to={"/edit/"+props.todo._id}><Edit/></RouterLink>
                <p style={{display:"inline"}} > : </p>
                <RouterLink to={"/delete/"+props.todo._id}><Delete/></RouterLink>
            </td>
        </tr>
    )
}

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    checkTodos = () => {
        if (this.state.todos.length === 0) {
            return <h3 align="center" style={{color:"#007bff"}}>All caught up!</h3>;
        }
    }

    todoList = () => {
        return this.state.todos.map((currentTodo, i) => {
            return <Todo todo={currentTodo} key={i} />;
        })
    }
    
    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
                { this.checkTodos() }
            </div>
        )
    }
}
