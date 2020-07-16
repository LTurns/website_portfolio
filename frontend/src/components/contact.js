import React, { Component } from "react";
import axios from 'axios';
import ContactParticles from './particlesContact';
import PortfolioParticles from "./particlesPortfolio";

export default class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }


    formSubmit = (e) => {
      e.preventDefault()
    
      this.setState({
          buttonText: '...sending'
      })
    
      let data = {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
      }
      
      axios.post('API_URI', data)
      .then( res => {
          this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        console.log('Message not sent')
      })
    }



    resetForm = () => {
      this.setState({
          name: '',
          message: '',
          email: '',
          buttonText: 'Message Sent'
      })
  }

  render() {
 
    return (

      <div>
      <PortfolioParticles />

      <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
      <label class="message" htmlFor="message-input">Your Message</label>
      <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>
    
      <label class="message-name" htmlFor="message-name">Your Name</label>
      <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name}/>
    
      <label class="message-email" htmlFor="message-email">Your Email</label>
      <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />
    
      <div className="button--container">
          <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
      </div>
    </form>
    </div>)
  }
}

// //In the above code, we are making HTTP GET request using React Axios and Node/Express JS REST API. We are using React-Bootstrap table to show the Students data on the frontend.