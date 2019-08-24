import React, { Component } from 'react'

const tute_url = "https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/"
const repo_url = "https://github.com/badinnergy/mern-todo-app"

const react_url = "https://reactjs.org/"
const node_url = "https://nodejs.org/"
const express_url = "https://expressjs.com/"
const mongodb_url = "https://www.mongodb.com/"
const mongoose_url = "https://mongoosejs.com/"

export default class DevHelpPage extends Component {
    render() {
        return (
            <div>
                <h1>Dev Help!</h1>
                <p>Hey everyone! This page is dedicated to help developers.</p>
                <p>I followed <a href={tute_url}>this tutorial</a> in completing this app with some additional features (DELETE, alerts).</p>
                <p>If you're interested in the code, here's <a href={repo_url}>a link to the Github Repo.</a></p>
                <p>Here are the details of the stack:</p>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Layer</th>
                            <th>Technology/Architecture/Framework/Libraries</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Front-end</td>
                            <td>React.js</td>
                            <td><a href={react_url} >React.js</a></td>
                        </tr>
                        <tr>
                            <td>Back-end</td>
                            <td>Node.js</td>
                            <td><a href={node_url} >Node.js</a></td>
                        </tr>
                        <tr>
                            <td>Server</td>
                            <td>Express.js</td>
                            <td><a href={express_url} >Express.js</a></td>
                        </tr>
                        <tr>
                            <td>Database</td>
                            <td>MongoDB (Mongoose)</td>
                            <td><a href={mongodb_url} >MongoDB</a> | <a href={mongoose_url} >Mongoose.js</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
