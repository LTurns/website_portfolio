import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export default class EditTask extends Component {

  constructor(props){
    super(props)

    this.state = {
      name: '',
      email: ''
    }


    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){

    axios.get('http://localhost:4000/tasks/edit-task/' + this.props.match.params.id)
    .then(res => {
      this.setState({
        name: res.data.name, 
        email: res.data.email
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  onChangeName(e){
    this.setState({ name: e.target.value })
  }

  onChangeEmail(e){
    this.setState({ email: e.target.value })
  }

  onSubmit(e){
    e.preventDefault()

    const taskObject = {
      name: this.state.name, 
      email: this.state.email
    };

   axios.put('http://localhost:4000/tasks/update-task/' + this.props.match.params.id, taskObject)
   .then((res) => {
     console.log(res.data)
     console.log('Task successfully updated')
   })
   .catch((error) => {
     console.log(error)
   })

   this.props.history.push('/task-list')
  }


  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
         <Form.Group controlId="Name">
           <Form.Label>Name</Form.Label>
           <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
         </Form.Group>

         <Form.Group controlId="Email">
           <Form.Label>Email</Form.Label>
           <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail} />
         </Form.Group>

         <Button variant="danger" size="lg" block="block" type="submit">
           Update Task
         </Button>
        </Form>
      </div>
    );
  }
}
