import React, { Component } from "react";
import "../contact.css"
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import PortfolioParticles from './particlesPortfolio';



export default class Contact extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //         fName: '',
  //         lName: '',
  //         email: '',
  //         message: '',
  //         formValidity: false,
  //         submitDisabled: false,
  //         formErrors: {
  //             email: 'Please Enter a correct Email',
  //             name: 'First and last names should contain only alphabet characters'
  //         },
  //     };

  //     this.changeValue = this.changeValue.bind(this);
  //     this.onSubmit = this.onSubmit.bind(this);
   
  //   };
  
  //   changeValue = event => {
  //     this.setState({
  //         [event.target.name]: event.target.value,
  //     });
  // };

  // onSubmit = (event) => {
  //     event.preventDefault();

  //     let formValidity = true;
  //     let errorType = undefined;


  //     const post = {
  //       message: this.state.message,
  //       fName: this.state.fName,
  //       lName: this.state.lName,
  //       email: this.state.email
  //     };

  //     fetch('/api/mail', {
  //       method: 'POST',
  //       body: post,
  //     });
    

  //     if (!validator.isEmail(this.state.email)) {
  //         formValidity = false;
  //         errorType = this.state.formErrors.email
  //     } else if (!validator.isAlpha(this.state.fName) || !validator.isAlpha(this.state.lName)) {
  //         formValidity = false;
  //         errorType = this.state.formErrors.name
  //     } 
  //     if (!formValidity) {
  //         this.setState({
  //             formValidity,
  //             errorType
  //         })
  //     } else {
  //         this.setState({
  //             formValidity,
  //             errorType: "Success, we'll get back to you shortly!",
  //             submitDisabled: true,
  //             fName: '',
  //             lName: '',
  //             email: '',
  //             message: ''
  //         });
  //     };

  //   };

  render(){
      return(
        <div>
          <center>
            <div class="container_email">
        <PortfolioParticles />
  <Row className="table1">
    <Col><Table className="tablerow1" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><br></br><center><br></br></center></th>
    </tr>
  </thead>
  <tbody>
    <center>
    {/* <tr><p>Thank you for taking the time to look at my portfolio.</p><br></br></tr>
     <tr><center><p>Click below if you would like to get in touch!</p></center></tr> <br></br> */}
     {/* <tr><center><img src="./new_portfolio_pic.png"></img></center></tr> */}
     <tr><center><a id="email" href="mailto:lizziesoftware@gmail.com">Email Me</a></center></tr>
     </center>
     <tr>
      <th><br></br><center><br></br></center></th>
    </tr>


  </tbody>
</Table></Col>
</Row>
</div>
</center>
</div>
      );
  }
}

// finish off email tomorrow = table currently doesn't recognise first or second name (and won't show). 
// Might be to do with the onSubmit style of the form = doesn't alter until submit button is pressed. Everything else 
// should be okay - but cannot test locally - needs deployment for us to be able to tell what is happening. 