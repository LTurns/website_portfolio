import React, { Component } from "react";
import axios from 'axios';
import "../contact.css"
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PortfolioParticles from './particlesPortfolio';
const API_PATH = 'http://localhost:3030/api'
export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }
    handleFormSubmit = e => {
      e.preventDefault();
      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
        .then(result => {
          this.setState({
            mailSent: result.data.sent
          })
        })
        .catch(error => this.setState({ error: error.message }));
    }


  render(){
      return(
        <div>
        <PortfolioParticles />
       {/* <h1> Hello World! </h1> */}<br></br><br></br>
       <Container class="containter">
  <Row class="table1">
    <Col><Table class="tablerow1" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>Contact Me</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><center>
    <form action="#" method="post" id="contact_form">
    <div class="name">
      <label for="name"></label>
      <input type="text" placeholder="My name is" name="name" id="name_input" required/>
    </div>
    <div class="email">
      <label for="email"></label>
      <input type="email" placeholder="My e-mail is" name="email" id="email_input" required/>
    </div>
    <div class="telephone">
      <label for="name"></label>
      <input type="text" placeholder="My number is" name="telephone" id="telephone_input" required/>
    </div>
    <div class="subject">
      <label for="subject"></label>
      <select placeholder="Subject line" name="subject" id="subject_input" required>
      </select>
    </div>
    <div class="message">
      <label for="message"></label>
      <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
    </div>
    <div class="submit">
      <input type="submit" value="Send Message" id="form_button" />
    </div>
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