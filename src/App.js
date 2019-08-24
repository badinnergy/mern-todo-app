// React
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Our own components
import TodosList from './components/todos-list.component'
import EditTodo from './components/edit-todo.component'
import CreateTodo from './components/create-todo.component'
import DeleteTodo from './components/delete-todo.component'

// CSS
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>

                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Todos</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Create Todo</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={TodosList} />
                    <Route path="/edit/:id" exact component={EditTodo} />
                    <Route path="/create" exact component={CreateTodo} />
                    <Route path="/delete/:id" exact component={DeleteTodo} />
                </div>
            </Router>
        )
    }
}


export default App;
