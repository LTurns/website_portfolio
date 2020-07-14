import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios'
import PortfolioParticles from './particlesPortfolio';
import '../table.css';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <PortfolioParticles />
       {/* <h1> Hello World! </h1> */}<br></br><br></br>
       <Container class="containter">
       <h3> Games </h3>
  <Row class="table1">
    <Col><Table class="tablerow1" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>Bowling Calculator</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><center><img width="200px" src="bowling_calculator.png"></img></center></td>
    </tr>
    <tr>
      <td>Calculates your score throughout your game of bowling, including strikes and spares.</td>
    </tr>
  </tbody>
</Table></Col>
    <Col><Table class="tablerow1" opacity="0.5" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>Run Boris Run</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><center><img width="200px" src="run_boris_run.png"></img></center></td>
    </tr>
    <tr>
      <td>SuperMario-styled game to encourage social distancing!</td>
    </tr>
  </tbody>
</Table></Col>
<Col><Table class="tablerow1" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>Interactive Paddle Game</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><center><img width="200px" src="pdf_cv.png"></img></center></td>
    </tr>
    <tr>
      <td>Colourful and responsive CV design.</td>
    </tr>
  </tbody>
</Table></Col>
  </Row><br></br><br></br>

  <Row class="table2">
    <Col> <Table class="table2" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>Acebook</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><center><img width="200px" src="acebook.png"></img></center></td>
    </tr>
    <tr>
      <td>A simple, drawn-back clone of Facebook.</td>
    </tr>
  </tbody>
</Table></Col>
    <Col><Table class="tablerow1" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>PDF CV</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><center><img width="200px" src="pdf_cv.png"></img></center></td>
    </tr>
    <tr>
      <td>Colourful and responsive CV design.</td>
    </tr>
  </tbody>
</Table></Col>
    <Col><Table class="table2" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>Acebook</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><center><img width="200px" src="acebook.png"></img></center></td>
    </tr>
    <tr>
      <td>A simple, drawn-back clone of Facebook.</td>
    </tr>
  </tbody>
</Table></Col>
  </Row>
  </Container>
      </div>
    );
  }
}
