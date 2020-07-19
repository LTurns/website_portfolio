import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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
    <td><center><video width="300" controls>
      <source src="bowling_calculator.mp4" type="video/mp4"></source>
    </video></center></td>
    </tr>
    <tr>
      <td>Calculates your score throughout your game of bowling, including strikes and spares.</td>
    </tr>
  </tbody>
</Table></Col>
    <Col><Table class="tablerow1" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>Run Boris Run</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><center><video width="300" controls>
      <source src="run_boris_run.mp4" type="video/mp4"></source>
    </video>
   </center></td>
    </tr>
    <tr>
      <td>SuperMario-styled game to encourage social distancing! Click <a href="https://run-boris-run.netlify.app/">here</a> to play for youself and hear Boris tell you to wash your hands!</td>
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
    <td><center><video width="300" controls>
      <source src="paddle_game.mp4" type="video/mp4"></source>
    </video>
   </center></td>
    </tr>
    <tr>
      <td>Simple, interactive paddle game. Javascript game physics implemented from scratch. Click <a href="https://trusting-einstein-e6ff9a.netlify.app/">here</a> to play for yourself!</td>
    </tr>
  </tbody> 
 </Table></Col>
  </Row><br></br><br></br>
  <h3> Database Integration</h3>
  <Row class="table2">
    <Col> <Table class="table2" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>Acebook</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><center><video width="300" controls>
      <source src="acebook_video.mp4" type="video/mp4"></source>
    </video>
   </center></td>
    </tr>
    <tr>
      <td>A simple, drawn-back clone of Facebook.</td>
    </tr>
  </tbody>
</Table></Col>
    <Col><Table class="tablerow1" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>MakersBnB</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>

    <td><center><video width="300" controls>
      <source src="makers_bnb_video.mp4" type="video/mp4"></source>
    </video>
   </center></td>
    </tr>
    <tr>
      <td>A clone of AirBnB, with similar booking features - payment capability excluded.</td>
    </tr>
  </tbody>
</Table></Col>
    {/* <Col><Table class="table2" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>Note Taker</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><center><img width="300px" src="acebook.png"></img></center></td>
    </tr>
    <tr>
      <td>A simple, drawn-back clone of Facebook.</td>
    </tr>
  </tbody>
</Table></Col> */}
  </Row><br></br><br></br>
  <h3> API integration</h3>
  <Row class="table2">
    <Col> <Table class="table2" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>Thermostat</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><center><video width="300" controls>
      <source src="temperature.mp4" type="video/mp4"></source>
    </video>
   </center></td>
    </tr>
    <tr>
      <td>An API-based web application that grabs the temperature of a City and enables you to modify the thermostat accordingly.</td>
    </tr>
  </tbody>
</Table></Col>
    <Col><Table class="tablerow1" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>The Guardian</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><center><video width="300" controls>
      <source src="guardian.mp4" type="video/mp4"></source>
    </video>
   </center></td>
    </tr>
    <tr>
      <td>An API-based app that collects the news from the Guardian's website.</td>
    </tr>
  </tbody>
</Table></Col>
    {/* <Col><Table class="table2" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>Googe Maps</center></th>
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
</Table></Col> */}
  </Row>
  </Container>
      </div>
    );
  }
}
