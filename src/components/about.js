import React from "react";
import PortfolioParticles from "./particlesPortfolio"
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "../about_text.css"
import "../home.css"
import "../about.css"

    function About(){
      return(
  <div classname="aboutGame">
    <PortfolioParticles />
    <Container className="containter">
    <Row className="table1 mx-auto">
    <Col><Table className="tablerow1" id="tablerow1" striped bordered hover variant="dark" responsive="lg" padding-bottom="1000px">
  <thead>
    <tr>
      <th><center>About Me</center></th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><center>

         
            <canvas id="gameScreen" width="1000" height= "400"></canvas>
           </center>
           </td>
           </tr>
           </tbody>
           </Table>
           </Col>
           </Row>
           </Container>
        </div>
      )
    }
    
    export default About