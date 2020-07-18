import React, { Component } from "react";
import axios from 'axios';
import PortfolioParticles from "./particlesPortfolio";
import "../contact.css"
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
        <form action="#" >
        <label>First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."
          value={this.state.fname}
          onChange={e => this.setState({ fname: e.target.value })}
        />
        <label>Last Name</label>
        <input type=" text" id="lname" name="lastname" placeholder="Your last name.."
          value={this.state.lname}
          onChange={e => this.setState({ lname: e.target.value })}
        />
      
      
        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Your email"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
        />
      
      
        <label>Message</label>
        <textarea id="message" name="message" placeholder="Write something.."
          onChange={e => this.setState({ message: e.target.value })}
          value={this.state.message}
        ></textarea>
        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />

        <div>
  {this.state.mailSent &&
    <div>Thank you for contacting me.</div>
  }
</div>
      </form >
      );
  }
}

// //In the above code, we are making HTTP GET request using React Axios and Node/Express JS REST API. We are using React-Bootstrap table to show the Students data on the frontend.