import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class TaskTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(){
        axios.delete('http://localhost:4000/tasks/delete-task/' + this.props.obj._id)
        .then((res) => {
            console.log("Task successfully deleted")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render(){
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>

               <td>
                   <Link className="edit-link" to={'/edit-task/' + this.props.obj._id}> Edit </Link>
                   <Button onClick={this.deleteTask} size="sm" variant="danger">Delete</Button>
               </td>
            </tr>
        );
    }
}