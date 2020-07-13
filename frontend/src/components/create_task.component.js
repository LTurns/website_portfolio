import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// we send the data to mongoDB using the axios post http method.
// first install on computer
import axios from "axios";

export default class CreateTask extends Component {
  // submitting the form to the database:
  //   1. Start by creating the constructor inside the createTask component (component with the data you want to send)

  constructor(props) {
    super(props)
    //   here we take in props - useful for if we take in or connect with other components. Not necessarily needed for just one component.

    // We then need to set up the initial state of the component (before anything filled in). This means that when a
    // user first sees the site, the content inside the form will initially be blank - or ''.
    this.state = {
      name: "",
      email: "",
      //   by changing the user input into state variables, we are then able to access them and send these directly to the database.
    };

    // Next we need to set up functions so that when someone adds something to the form, this changes the state of the above. This change means the new
    // content can then be sent to the database.

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //Here we declaire functions with every React form field value, so when the user inserts the data within the form input field, a state will be set accordingly.
  }

  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  //   these are the functions we called above. The (e) "event" refers to the change / what the user does to change the current state.
  //   The name filled in will then be set as the new state. At the event, we target the value from name and use it to bind with this particular method.

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    // prevent from page from refreshing when this is pressed.
    console.log("hey");

    // initialise axios request on submit:

    const taskObject = {
      name: this.state.name,
      email: this.state.email,
    };
    // this grabs the current states of the two above and puts them in a constant.
    axios
      .post("http://localhost:4000/tasks/create-task", taskObject)
      //   the constant is then sent to the server (back end) - to the route provided in the promise.
      // This route links to the router declared in the backend route files. For example, because we are in the
      // create-task component, this means we need to send the new data to the create-task API location.
      .then((res) => console.log(res.data));
    //   this means we should get the response (the data we sent) returned to us - so we can see that it has definitely been received.
    console.log("data sent!");

    // this line means that once submit is clicked, the form will go back to being blank (it's initial state). This is completed after we know that
    // the information has been sent to the database.

    this.setState({ name: "", email: "" });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={this.state.emaill}
              onChange={this.onChangeEmail}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create Task
          </Button>
        </Form>
      </div>
    );
  }
}
