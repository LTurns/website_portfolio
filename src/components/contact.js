import React, { Component } from "react";
import "../contact.css"
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PortfolioParticles from './particlesPortfolio';
import validator from 'validator';
import FormError from './FormErrors';



export default class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
          fName: '',
          lName: '',
          email: '',
          message: '',
          formValidity: false,
          submitDisabled: false,
          formErrors: {
              email: 'Please Enter a correct Email',
              name: 'First and last names should contain only alphabet characters'
          },
      };

      this.changeValue = this.changeValue.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   
    };
  
    changeValue = event => {
      this.setState({
          [event.target.name]: event.target.value,
      });
  };

  onSubmit = (event) => {
      event.preventDefault();

      let formValidity = true;
      let errorType = undefined;


      const post = {
        message: this.state.message,
        fName: this.state.fName,
        lName: this.state.lName,
        email: this.state.email
      };

      fetch('/api/mail', {
        method: 'POST',
        body: post,
      });
    

      if (!validator.isEmail(this.state.email)) {
          formValidity = false;
          errorType = this.state.formErrors.email
      } else if (!validator.isAlpha(this.state.fName) || !validator.isAlpha(this.state.lName)) {
          formValidity = false;
          errorType = this.state.formErrors.name
      } 
      if (!formValidity) {
          this.setState({
              formValidity,
              errorType
          })
      } else {
          this.setState({
              formValidity,
              errorType: "Success, we'll get back to you shortly!",
              submitDisabled: true,
              fName: '',
              lName: '',
              email: '',
              message: ''
          });
      };

    };

  render(){
      return(
        <div>
        <PortfolioParticles />
       {/* <h1> Hello World! </h1> */}<br></br><br></br>
       <Container className="containter">
  <Row className="table1">
    <Col><Table className="tablerow1" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>Contact Me</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><center>
    <form onSubmit={this.onSubmit}>
    <div className="firstName">
      {/* <label for="firstname"></label> */}
      <input type="text" value={this.state.fName} placeholder="My first name is" name="fName" id="name_input" onChange={event => this.changeValue(event)}  required/>
    </div>
    <div className="lastName">
      {/* <label for="lastName"></label> */}
      <input type="text" value={this.state.lName} placeholder="My last name is" name="lName" id="name_input" onChange={event => this.changeValue(event)} required/>
    </div>
    <div className="email">
      {/* <label for="email"></label> */}
      <input type="email" placeholder="My email is" name="email" value={this.state.email} id="email_input" onChange={event => this.changeValue(event)} required/>
    </div>
    {/* <div className="subject">
      {/* <label for="subject"></label> */}
      {/* <select placeholder="Subject line"  id="subject_input" value={this.state.subject} onChange={event => this.changeValue(event)} required>
      </select>
    </div> */} 
    <div className="message">
      {/* <label for="message"></label> */}
      <textarea type="text" name="message" placeholder="I'd like to chat about" id="message_input" value={this.state.message} cols="30" rows="5" onChange={event=> this.changeValue(event)} required>
      </textarea>
    </div>


    <button disabled={this.state.submitDisabled} onClick={(event) => this.onSubmit(event)}>Submit</button>
                <FormError errorType={this.state.errorType}/>
  </form>
   </center> </td>
    </tr>
  </tbody>
</Table></Col>
</Row>
</Container>
</div>
      );
  }
}

// finish off email tomorrow = table currently doesn't recognise first or second name (and won't show). 
// Might be to do with the onSubmit style of the form = doesn't alter until submit button is pressed. Everything else 
// should be okay - but cannot test locally - needs deployment for us to be able to tell what is happening. 