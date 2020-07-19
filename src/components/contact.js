import React, { Component } from "react";
import "../contact.css"
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PortfolioParticles from './particlesPortfolio';
import validator from 'validator';
import FormError from './FormErrors';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export default class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
          fName: '',
          lName: '',
          email: '',
          subject: '',
          formValidity: false,
          submitDisabled: false,
          formErrors: {
              email: 'Please Enter a correct Email',
              name: 'First and last names should contain only alphabet characters'
          },
      };



      // const SENDGRID_API_KEY =  "process.env.SENDGRID_API_KEY}" ;
      // sgMail.setApiKey(SENDGRID_API_KEY);
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);

      this.changeValue = this.changeValue.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   
    }

  
    changeValue = event => {
      this.setState({
          [event.target.fName]: event.target.value,
      });
  };

  onSubmit = (event) => {
      event.preventDefault();

      let formValidity = true;
      let errorType = undefined;

      const MSG = {
          to: 'lizzieturney@gmail.com',
          from: 'lizzieturney@gmail.com',
          subject: 'New Lead',
          text: ' ',
          html: '<div style="text-align:center;font-size:22px">' +
          '<h2>You have received a new enquiry!</h2>' +
          '<ul style="text-align: left;font-size:16px">' +
          '<li>First Name: ' + this.state.fName + '</li>' +
          '<li>Last Name: ' + this.state.lName + '</li>' +
          '<li>Mail Address: ' + this.state.email + '</li>' +
          '<li>Subject: ' + this.state.subject + '</li>' +
          '</ul>' +
          '</div>',
      };

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
              subject: ''
          }, () => sgMail.send(MSG))
      }
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
    <form action="#">
    <div className="firstName">
      {/* <label for="firstname"></label> */}
      <input type="text" value={this.state.fName} placeholder="My first name is" name="name" id="name_input" onChange={event => this.changeValue(event)}  required/>
    </div>
    <div className="lastName">
      {/* <label for="lastName"></label> */}
      <input type="text" value={this.state.lName} placeholder="My last name is" name="name" id="name_input" onChange={event => this.changeValue(event)} required/>
    </div>
    <div className="email">
      {/* <label for="email"></label> */}
      <input type="email" placeholder="My email is" name="email" value={this.state.email} id="email_input" onChange={event => this.changeValue(event)} required/>
    </div>
    {/* <div className="subject">
      {/* <label for="subject"></label> */}
      {/* <select placeholder="Subject line"  id="subject_input" value={this.state.subject} onChange={event => this.changeValue(event)} required>
      </select>
    </div> */} */}
    <div className="message">
      {/* <label for="message"></label> */}
      <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
    </div>


    <button disabled={this.state.submitDisabled} onClick={(event) => this.onSubmit(event)}>Submit</button>
                <FormError errorType={this.state.errorType}/>
    {/* <div className="submit">
      <input disabled={this.state.submitDisabled} onClick={(event) => this.onSubmit(event)} type="submit" value="Send Message" id="form_button" />
    </div> */}
    {/* <div class="submit">
      <input type="submit" action="/about" value="Paddle Game" id="about_button" />
    </div> */}
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